#!/usr/bin/env bash
set -uo pipefail
VAULT="$HOME/Bureau/Michel"
MODELE="small"
DATE=$(date +%Y%m%d_%H%M%S)
AUDIO="/tmp/capture_$DATE.wav"
SORTIE="$VAULT/transcription_$DATE.md"
MONITOR="$(pactl get-default-sink).monitor"
echo "Enregistrement... lance ta video maintenant. Ctrl+C pour arreter."
ffmpeg -hide_banner -loglevel error -f pulse -i "$MONITOR" -ac 1 -ar 16000 "$AUDIO"
echo "Transcription en cours..."
python3 "$VAULT/transcrire.py" "$AUDIO" "$SORTIE" "$MODELE"
echo "Termine : $SORTIE"
rm -f "$AUDIO"
