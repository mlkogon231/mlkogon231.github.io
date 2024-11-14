// Remove the import statements since we're loading React globally
const DevSecOpsDashboard = () => {
    const metrics = {
        scans: 150,
        issuesCaught: 23,
        avgScanTime: "2.5 min",
        successRate: "98.5%"
    };

    return (
        <div className="p-6 bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#3498db] text-2xl font-bold mb-6">DevSecOps Pipeline Metrics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-[#3498db]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-400 text-sm">Security Scans</h3>
                            <span className="text-[#3498db] text-xl">🛡️</span>
                        </div>
                        <p className="text-3xl font-bold mt-2">{metrics.scans}</p>
                        <p className="text-sm text-gray-400 mt-2">Total pipeline runs</p>
                    </div>
                    
                    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-[#e74c3c]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-400 text-sm">Issues Detected</h3>
                            <span className="text-[#e74c3c] text-xl">⚠️</span>
                        </div>
                        <p className="text-3xl font-bold mt-2 text-[#e74c3c]">{metrics.issuesCaught}</p>
                        <p className="text-sm text-gray-400 mt-2">Security vulnerabilities found</p>
                    </div>
                    
                    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-[#3498db]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-400 text-sm">Avg Scan Time</h3>
                            <span className="text-[#3498db] text-xl">⏱️</span>
                        </div>
                        <p className="text-3xl font-bold mt-2">{metrics.avgScanTime}</p>
                        <p className="text-sm text-gray-400 mt-2">Pipeline execution time</p>
                    </div>
                    
                    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-[#2ecc71]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-400 text-sm">Success Rate</h3>
                            <span className="text-[#2ecc71] text-xl">✅</span>
                        </div>
                        <p className="text-3xl font-bold mt-2 text-[#2ecc71]">{metrics.successRate}</p>
                        <p className="text-sm text-gray-400 mt-2">Clean security scans</p>
                    </div>
                </div>

                <div className="mt-6 bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-[#3498db]">
                    <h3 className="text-[#3498db] font-bold mb-4">Security Features Implemented</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Secret Scanning with Semgrep</li>
                        <li>Container Security with Trivy</li>
                        <li>Dependency Scanning with npm audit</li>
                        <li>SAST (Static Application Security Testing)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};