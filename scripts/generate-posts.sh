#!/bin/bash
cd "$(dirname "$0")/.."

get_title() {
    local file="$1"
    # Skip YAML frontmatter (between --- markers) and find first # heading
    local title=$(awk '
        /^---$/ { in_frontmatter = !in_frontmatter; next }
        !in_frontmatter && /^# / { sub(/^# /, ""); print; exit }
    ' "$file" 2>/dev/null)
    if [ -z "$title" ]; then
        title=$(basename "$file" .md | tr '-' ' ')
    fi
    echo "$title"
}

# Generate toc.md
TOC="posts/toc.md"
echo "# Table of Contents" > "$TOC"
echo "" >> "$TOC"

# Top-level posts
for file in posts/*.md; do
    [ -f "$file" ] || continue
    name=$(basename "$file" .md)
    title=$(get_title "$file")
    echo "- [$title](#$name)" >> "$TOC"
done

# Subfolders
folders=$(find posts -mindepth 1 -maxdepth 1 -type d -not -name '.*' | sort)
for folder in $folders; do
    folder_name=$(basename "$folder")
    folder_title=$(echo "$folder_name" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
    
    echo "" >> "$TOC"
    echo "## $folder_title" >> "$TOC"
    echo "" >> "$TOC"
    
    for file in "$folder"/*.md; do
        [ -f "$file" ] || continue
        path="$folder_name/$(basename "$file" .md)"
        title=$(get_title "$file")
        echo "- [$title](#$path)" >> "$TOC"
    done
done

echo "" >> "$TOC"
echo "---" >> "$TOC"
echo "[← Home](#main)" >> "$TOC"

echo "Generated $TOC"
cat "$TOC"
