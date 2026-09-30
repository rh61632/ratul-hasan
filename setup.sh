#!/bin/sh
# One-time setup script when cloning on a new machine

echo "🔧 Setting up repository dependencies..."
pip install -r requirements.txt

echo "🪝 Configuring local Git pre-commit hooks..."
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit

echo "✅ All set! When you git commit, image thumbnails will generate automatically."
