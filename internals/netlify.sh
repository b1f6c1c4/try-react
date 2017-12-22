#!/usr/bin/env bash
set -e

if [[ -z "$NETLIFYKEY" ]]; then
  echo "Ignore deploying to Netlify"
else
  echo "Start deploying to Netlify..."

  echo "/* /index.html 200" > build/_redirects

  zip -r website.zip build

  curl -H "Content-Type: application/zip" \
       -H "Authorization: Bearer $NETLIFYKEY" \
       --data-binary "@website.zip" \
       https://api.netlify.com/api/v1/sites/47b66880-6807-4399-bc94-91e327d44c46/deploys

  curl -H "Content-Type: application/zip" \
       -H "Authorization: Bearer $NETLIFYKEY" \
       --data-binary "@website.zip" \
       https://api.netlify.com/api/v1/sites/3bb810a7-9b7e-4af9-b1fe-eddffe55f3f2/deploys
fi
