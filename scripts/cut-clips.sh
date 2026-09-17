#!/usr/bin/env bash
# Cuts the program-card hover clips out of the Combat promo video.
#   bash scripts/cut-clips.sh
#
# Each clip is a 3:4 crop (the card's shape), silent, looped on the page.
# Arguments to `cut`: name, start second, length, crop x offset in the 1920px source,
# poster frame second. Timings were picked from a 2fps frame sheet of the promo.
set -euo pipefail
cd "$(dirname "$0")/.."

FF=node_modules/ffmpeg-static/ffmpeg.exe
[ -x "$FF" ] || FF=node_modules/ffmpeg-static/ffmpeg
IN=public/combat/combat-promo-min-compressed.mp4
OUT=public/combat/clips
mkdir -p "$OUT"

cut() {
  local name=$1 start=$2 len=$3 x=$4 poster=$5
  "$FF" -y -loglevel error -ss "$start" -t "$len" -i "$IN" -an \
    -vf "crop=810:1080:$x:0,scale=600:800,fps=30" \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart \
    "$OUT/$name.mp4"
  "$FF" -y -loglevel error -ss "$poster" -i "$IN" \
    -vf "crop=810:1080:$x:0,scale=600:800" -frames:v 1 -q:v 3 "$OUT/$name.jpg"
  echo "$name.mp4 + $name.jpg"
}

# Guard, then a front kick at the camera, then bag work.
cut mma    5.5 3.0 480  6.0
# Pad work with a coach, ending on a roundhouse kick. Stops before the edit cuts away.
cut boxing 24.0 2.9 560 26.5
