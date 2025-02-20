#!/bin/bash

# Input file
input="input.mp4"

# Output directory
output_dir="./output/videos"
mkdir -p "$output_dir"

# Maximum width
max_width=1308

# Pixel densities
densities=(1 2)

# Desired widths (in pixels)
widths=(320 640 960 1280)

# Get the original video width
original_width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=s=x:p=0 "$input")

# Filter widths to ensure they are less than or equal to the original width
valid_widths=()
for w in "${widths[@]}"; do
  if [ "$w" -le "$original_width" ] && [ "$w" -le "$max_width" ]; then
    valid_widths+=("$w")
  fi
done

# Process each width and density
for density in "${densities[@]}"; do
  for width in "${valid_widths[@]}"; do
    # Calculate scaled width
    scaled_width=$((width * density))
    if ((scaled_width % 2 != 0)); then
      scaled_width=$((scaled_width + 1)) # Ensure even width for encoding
    fi

    # Output filename
    output_file="${output_dir}/$(basename "$input" .mp4)-${scaled_width}w-${density}x.mp4"

    # Run ffmpeg command
    ffmpeg -i "$input" \
      -vf "scale=${scaled_width}:-2:flags=neighbor" \
      -c:v libx264 \
      -crf 22 \
      -preset medium \
      -movflags +faststart \
      "$output_file"

    echo "Generated: $output_file"
  done
done
