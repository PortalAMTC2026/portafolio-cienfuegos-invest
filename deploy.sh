#!/bin/bash
set -e

echo "🔨 Compilando proyecto..."
pnpm build

echo "📦 Preparando para GitHub Pages..."
mkdir -p docs
cp -r dist/public/* docs/

echo "✅ Build completado en directorio 'docs'"
ls -la docs/ | head -10
