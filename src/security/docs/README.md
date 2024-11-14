# DevSecOps Pipeline Documentation

## Security Tools Used

### 1. TruffleHog (Secret Scanning)
- Open source secret scanner
- Detects hardcoded credentials
- Runs on every commit

### 2. Semgrep (SAST)
- Static code analysis
- Custom security rules
- JavaScript/Node.js specific checks

### 3. Trivy (Container Security)
- Container vulnerability scanning
- OS package checking
- Free and open source

### 4. npm audit & Snyk
- Dependency vulnerability checking
- Known vulnerability database
- Automated security updates

## Local Development

Run security checks locally:
```bash
./security/scripts/security-checks.sh
```

## Security Reports
Reports are generated in:
- `security/reports/trivy-results.json`
- `security/reports/semgrep-results.json`
- `security/reports/secrets-scan.json`

## CI/CD Integration
The pipeline automatically:
1. Scans for secrets
2. Checks dependencies
3. Performs SAST
4. Scans containers
5. Runs security tests