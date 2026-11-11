"""Validate the exported map and separate editable cast without a renderer."""
from pathlib import Path
import json
import struct

root = Path(__file__).resolve().parents[1]
names = {'林黛玉', '贾宝玉', '贾母', '王熙凤', '王夫人', '贾迎春', '贾探春', '贾惜春', '雪雁'}
designs = {'daiyu', 'baoyu', 'jiamu', 'fengjie', 'wang', 'yingchun', 'tanchun', 'xichun', 'xueyan'}
files = {}
for stem, image_count in [('jiafu-block-map-v11', 1), ('jiafu-block-characters-v11', 0)]:
    path = root / 'assets' / (stem + '.glb')
    data = path.read_bytes()
    magic, version, length = struct.unpack_from('<4sII', data)
    assert magic == b'glTF' and version == 2 and length == len(data), path
    chunk_length, chunk_type = struct.unpack_from('<II', data, 12)
    assert chunk_type == 0x4e4f534a
    doc = json.loads(data[20:20 + chunk_length])
    assert len(doc.get('images', [])) == image_count
    assert all('bufferView' in image for image in doc.get('images', []))
    assert names.issubset({node.get('name') for node in doc['nodes']})
    assert not any(node.get('name') in {'maid', 'sweeper', 'reader'} for node in doc['nodes'])
    blend = path.with_suffix('.blend')
    assert blend.is_file() and blend.stat().st_size > 100000
    cast = [node['extras'] for node in doc['nodes'] if node.get('extras', {}).get('characterVersion')]
    assert all(person['faceRevision'] == 4 and person['faceStyle'] == 'reference-square' and person['rigRevision'] == 1 and person['poseName'] for person in cast)
    assert len(cast) == (9 if image_count == 0 else 11)
    face_materials = {index for index, material in enumerate(doc['materials']) if material.get('name', '').startswith('block-face-vertex-colours')}
    facial_primitives = [primitive for mesh in doc['meshes'] for primitive in mesh['primitives'] if primitive.get('material') in face_materials]
    assert len(facial_primitives) == len(cast) * 3
    assert all('COLOR_0' in primitive['attributes'] for primitive in facial_primitives)
    if image_count == 0:
        assert len(cast) == 9
        assert {person['characterDesign'] for person in cast} == designs
        assert all(person['characterStyle'] == 'block' and person['characterVersion'] == 11 for person in cast)
    files[stem] = {'glbBytes': len(data), 'blendBytes': blend.stat().st_size,
                   'embeddedImages': image_count, 'facialColourMeshes': len(facial_primitives), 'principalCharacters': sorted(names)}
report_path = root / 'outputs/model-verification-v11.json'
report = json.loads(report_path.read_text(encoding='utf-8'))
assert report['packedAtlas'] and report['texturedMeshes'] == 5
report.update(status='passed', faceRevision=4, faceStyle='reference-square', files=files)
report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'status': 'passed', 'files': files}, ensure_ascii=False, indent=2))
