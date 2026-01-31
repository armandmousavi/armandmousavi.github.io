#!/bin/bash
cd "$(dirname "$0")/.."

PORT=${1:-8000}

echo "Generating toc.md..."
bash scripts/generate-posts.sh

echo ""
echo "Local server at http://localhost:$PORT"
echo "Press Ctrl+C to stop"

python3 -m http.server $PORT
