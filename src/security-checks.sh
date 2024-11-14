#!/bin/bash

echo "Running security checks..."

# Check for secrets
echo "🔍 Scanning for secrets..."
docker run --rm -v "$(pwd):/repo" trufflesecurity/trufflehog:latest filesystem /repo

# Check dependencies
echo "📦 Checking dependencies..."
npm audit

# Check known vulnerabilities
echo "🛡️ Checking for known vulnerabilities..."
npm install -g snyk
snyk test || true

echo "✅ Security checks completed!"