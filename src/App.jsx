import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const App = () => {
  // Sample data for security scan metrics
  const securityData = [
    { name: 'Monday', vulnerabilities: 12, fixed: 8, pending: 4 },
    { name: 'Tuesday', vulnerabilities: 15, fixed: 10, pending: 5 },
    { name: 'Wednesday', vulnerabilities: 8, fixed: 7, pending: 1 },
    { name: 'Thursday', vulnerabilities: 10, fixed: 8, pending: 2 },
    { name: 'Friday', vulnerabilities: 7, fixed: 6, pending: 1 }
  ];

  // Data for pie chart showing scan distribution
  const scanDistribution = [
    { name: 'Semgrep', value: 35 },
    { name: 'Trivy', value: 25 },
    { name: 'SAST', value: 20 },
    { name: 'Dependency', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">DevSecOps Pipeline Dashboard</h1>
        
        {/* Grid layout for metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vulnerabilities Over Time */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Vulnerabilities Over Time</h2>
            <LineChart width={500} height={300} data={securityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vulnerabilities" stroke="#8884d8" />
              <Line type="monotone" dataKey="fixed" stroke="#82ca9d" />
            </LineChart>
          </div>

          {/* Security Scan Distribution */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Security Scan Distribution</h2>
            <PieChart width={500} height={300}>
              <Pie
                data={scanDistribution}
                cx={250}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {scanDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Daily Scan Results */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Daily Scan Results</h2>
            <BarChart width={500} height={300} data={securityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="fixed" fill="#82ca9d" />
              <Bar dataKey="pending" fill="#8884d8" />
            </BarChart>
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Weekly Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Total Scans</h3>
                <p className="text-3xl font-bold text-blue-400">52</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Issues Found</h3>
                <p className="text-3xl font-bold text-yellow-400">47</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Fixed</h3>
                <p className="text-3xl font-bold text-green-400">39</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Pending</h3>
                <p className="text-3xl font-bold text-red-400">8</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;