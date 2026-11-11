from pathlib import Path
import bpy,json
root=Path(__file__).resolve().parents[1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=str(root/'assets/jiafu-block-map-v11.glb'))
meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
assert len(meshes)>150,len(meshes)
# Offline Three.js export keeps the atlas coordinates but has no browser image loader.
# Reattach the atlas here, undo the importer's V flip, then embed the image in both files.
atlas=bpy.data.images.load(str(root/'public/assets/interiors-v8/luxury-atlas.png'),check_existing=True)
pattern_names={'interior-silk','interior-rosecloth','interior-quilt','interior-cushion','interior-screen-art'}
mapped=[]
for material in bpy.data.materials:
    if material.name not in pattern_names: continue
    material.use_nodes=True
    shader=next(n for n in material.node_tree.nodes if n.type=='BSDF_PRINCIPLED')
    texture=material.node_tree.nodes.new('ShaderNodeTexImage');texture.image=atlas
    material.node_tree.links.new(texture.outputs['Color'],shader.inputs['Base Color'])
    shader.inputs['Base Color'].default_value=(1,1,1,1)
    shader.inputs['Roughness'].default_value=.72
    mapped.append(material.name)
assert set(mapped)==pattern_names,mapped
pattern_meshes=[]
for obj in meshes:
    if not any(m and m.name in pattern_names for m in obj.data.materials): continue
    assert len(obj.data.materials)==1,obj.name
    assert obj.data.uv_layers.active,obj.name
    for loop in obj.data.uv_layers.active.data: loop.uv.y=1-loop.uv.y
    pattern_meshes.append(obj.name)
assert len(pattern_meshes)>=5,pattern_meshes
atlas.pack()
bpy.ops.object.camera_add(location=(72,-72,85))
camera=bpy.context.object;camera.name='Jiafu_Overview';direction=__import__('mathutils').Vector((0,0,0))-camera.location;camera.rotation_euler=direction.to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=115;bpy.context.scene.camera=camera
bpy.context.scene.world.color=(.2,.25,.19)
bpy.context.scene.render.resolution_x=1600;bpy.context.scene.render.resolution_y=1000
bpy.context.preferences.filepaths.temporary_directory=str(root/'.cache/temp')
preview=bpy.context.preferences.filepaths.bl_rna.properties.get('file_preview_type')
if preview and 'NONE' in preview.enum_items.keys(): bpy.context.preferences.filepaths.file_preview_type='NONE'
bpy.ops.object.light_add(type='SUN',location=(-32,-28,48));bpy.context.object.rotation_euler=(.5,-.45,-.65);bpy.context.object.data.energy=2.5
bpy.ops.wm.save_as_mainfile(filepath=str(root/'assets/jiafu-block-map-v11.blend'))
bpy.ops.export_scene.gltf(filepath=str(root/'assets/jiafu-block-map-v11.glb'),export_format='GLB',export_cameras=True,export_extras=True)
report={'objects':len(bpy.context.scene.objects),'meshes':len(meshes),'atlasMaterials':mapped,'texturedMeshes':len(pattern_meshes),'packedAtlas':atlas.packed_file is not None,'blend':str(root/'assets/jiafu-block-map-v11.blend'),'glb':str(root/'assets/jiafu-block-map-v11.glb')}
# A separate editable nine-character file avoids opening the full landscape to edit a person.
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=str(root/'assets/jiafu-block-characters-v11.glb'))
names={'林黛玉','贾宝玉','贾母','王熙凤','王夫人','贾迎春','贾探春','贾惜春','雪雁'}
assert names.issubset({o.name for o in bpy.context.scene.objects})
bpy.ops.object.camera_add(location=(14,-20,14));camera=bpy.context.object;direction=__import__('mathutils').Vector((0,-4,1))-camera.location;camera.rotation_euler=direction.to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=18;bpy.context.scene.camera=camera
bpy.ops.object.light_add(type='AREA',location=(3,-8,11));bpy.context.object.data.energy=1200;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=8
bpy.context.scene.world=bpy.data.worlds.new('Character_Studio');bpy.context.scene.world.color=(.3,.3,.27)
bpy.ops.wm.save_as_mainfile(filepath=str(root/'assets/jiafu-block-characters-v11.blend'))
report.update(characters=sorted(names),characterBlend=str(root/'assets/jiafu-block-characters-v11.blend'),characterGlb=str(root/'assets/jiafu-block-characters-v11.glb'))
(root/'outputs/model-verification-v11.json').write_text(json.dumps(report,indent=2),encoding='utf-8');print(json.dumps(report))
