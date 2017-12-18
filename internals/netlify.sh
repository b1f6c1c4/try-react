#!/usr/bin/env bash
set -e

zip -r website.zip build

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFYKEY" \
     --data-binary "@website.zip" \
     https://api.netlify.com/api/v1/sites/47b66880-6807-4399-bc94-91e327d44c46/deploys
