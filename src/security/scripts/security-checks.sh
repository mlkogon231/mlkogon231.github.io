#!/bin/bash

echo "Running security checks..."

# Check for secrets
echo "Ì¥ç Scanning for secrets..."
docker run --rm -v "$(pwd):/repo" trufflesecurity/trufflehog:latest filesystem /repo

# Check dependencies
echo "Ì≥¶ Checking dependencies..."
npm audit

# Check known vulnerabilities
echo "Ìª°Ô∏è Checking for known vulnerabilities..."
npm install -g snyk
snyk test || true

echo "‚úÖ Security checks completed!"
