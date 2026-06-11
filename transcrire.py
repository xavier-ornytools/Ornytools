import sys
from faster_whisper import WhisperModel

audio, sortie, modele = sys.argv[1], sys.argv[2], sys.argv[3]
model = WhisperModel(modele, device="cpu", compute_type="int8")
segments, info = model.transcribe(audio, language=None)

with open(sortie, "w", encoding="utf-8") as f:
    f.write("# Transcription (" + info.language + ")\n\n")
    for seg in segments:
        f.write(seg.text.strip() + "\n")
print("OK")
