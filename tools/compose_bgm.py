"""Compose an original soft pentatonic loop; no external recordings or samples."""
from pathlib import Path
import math
import os
import shutil
import subprocess
import wave
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
RATE = 44100
BEAT = 60 / 64
BAR = BEAT * 4
DURATION = BAR * 32
COUNT = round(DURATION * RATE)
rng = np.random.default_rng(20261022)
mix = np.zeros((COUNT, 2), dtype=np.float32)

def hz(midi):
    return 440 * 2 ** ((midi - 69) / 12)

def add(samples, start, gain=1, pan=0):
    samples = np.asarray(samples, dtype=np.float32) * gain
    stereo = samples[:, None] * np.array([math.sqrt((1-pan)/2), math.sqrt((1+pan)/2)], dtype=np.float32)
    offset = round(start * RATE) % COUNT
    first = min(len(stereo), COUNT-offset)
    mix[offset:offset+first] += stereo[:first]
    if first < len(stereo):
        mix[:len(stereo)-first] += stereo[first:]

def pluck(midi, start, gain=.10, pan=0):
    t = np.arange(round(4.5*RATE), dtype=np.float32)/RATE
    f = hz(midi)
    signal = np.zeros_like(t)
    for harmonic, level, decay in [(1,1,1.8),(2,.22,1.0),(3,.075,.6),(4,.025,.4)]:
        signal += level*np.sin(2*np.pi*f*harmonic*t) * np.exp(-t/decay)
    signal *= 1-np.exp(-t/.018)
    add(signal, start, gain, pan)

def flute(midi, start, length, gain=.073, pan=.10):
    t = np.arange(round((length+.7)*RATE), dtype=np.float32)/RATE
    f = hz(midi)
    modulation = .0022*np.sin(2*np.pi*4.1*t)*(1-np.exp(-t/.65))
    phase = 2*np.pi*f*np.cumsum(1+modulation)/RATE
    tone = np.sin(phase) + .13*np.sin(2*phase) + .018*np.sin(3*phase)
    envelope = np.minimum(t/.3,1)*np.minimum((length+.7-t)/.8,1)
    envelope *= .94+.06*np.sin(2*np.pi*.63*t)
    add(tone*np.maximum(envelope,0), start, gain, pan)

def pad(notes, start, length=BAR*2):
    t = np.arange(round((length+1.6)*RATE), dtype=np.float32)/RATE
    envelope = np.minimum(t/1.6,1)*np.minimum((length+1.6-t)/2.2,1)
    sound = np.zeros_like(t)
    for midi in notes:
        f = hz(midi)
        sound += .42*np.sin(2*np.pi*f*t)+.29*np.sin(2*np.pi*f*1.0012*t)+.29*np.sin(2*np.pi*f*.9988*t)
    add(sound*np.maximum(envelope,0), start, .014/len(notes), -.05)

# Open fifths under a pentatonic melody. Each eight-bar phrase is gently varied.
roots = [50,50,47,47,43,43,45,45]
for bar in range(32):
    root = roots[bar%8]
    start = bar*BAR
    energy = .80 if bar<2 else .95 if bar<24 else .86
    if bar%2==0:
        pad([root-12,root-5,root], start)
    pluck(root, start+.025, .105*energy, -.20)
    pluck(root+7, start+BEAT*1.6, .066*energy, .23)
    if bar%4 in (1,2):
        pluck(root+12, start+BEAT*2.9, .044*energy, -.12)

phrase = [
    [(62,.35,2.7)], [(66,.25,1.3),(64,2.0,1.3)],
    [(62,.3,2.6)], [(59,.4,1.6),(57,2.6,.8)],
    [(62,.25,1.6),(64,2.2,1.2)], [(66,.25,2.6)],
    [(64,.3,1.3),(62,2.1,1.25)], [(57,.4,2.3)]
]
for bar in range(2,32):
    for midi, offset, length in phrase[bar%8]:
        if 16<=bar<24 and bar%4==1:
            midi = 69 if midi==66 else midi
        gain = .063 if bar>=28 else .073
        flute(midi, bar*BAR+offset*BEAT, length*BEAT, gain, .12 if bar%2 else -.08)

# A quiet, periodic stereo room tail also makes the wrap seamless.
dry = mix.copy()
for delay, gain in [(.113,.18),(.229,.13),(.347,.09),(.541,.055),(.827,.025)]:
    mix += np.roll(dry[:,::-1], round(delay*RATE), axis=0)*gain
peak = float(np.max(np.abs(mix)))
mix *= .42/max(peak,.01)
output = ROOT/'dist/assets/audio'
output.mkdir(parents=True,exist_ok=True)
work = ROOT/'artifacts/audio-generation'
work.mkdir(parents=True,exist_ok=True)
wav = work/'bamboo-shadows-master.wav'
with wave.open(str(wav),'wb') as handle:
    handle.setnchannels(2)
    handle.setsampwidth(2)
    handle.setframerate(RATE)
    handle.writeframes((np.clip(mix,-1,1)*32767).astype('<i2').tobytes())
ffmpeg = os.environ.get('FFMPEG_PATH') or shutil.which('ffmpeg')
if not ffmpeg:
    raise SystemExit('Install FFmpeg and add it to PATH, or set FFMPEG_PATH.')
subprocess.run([str(ffmpeg),'-hide_banner','-loglevel','error','-y','-i',str(wav),'-codec:a','libmp3lame','-b:a','160k','-metadata','title=竹影入帘','-metadata','artist=潇湘初梦 · 原创程序作曲',str(output/'bamboo-shadows.mp3')],check=True)
print(f'Original instrumental loop: {DURATION:.1f} seconds, 64 BPM, stereo, {output / "bamboo-shadows.mp3"}')
