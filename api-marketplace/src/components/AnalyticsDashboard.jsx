import React from 'react';
const AnalyticsDashboard = () => {
  const stats = [
    { label: 'API Calls', value: '124,567', change: '+12%', color: 'text-green-600' },
    { label: 'Active APIs', value: '23', change: '+2', color: 'text-blue-600' },
    { label: 'Monthly Cost', value: '$89.50', change: '-5%', color: 'text-red-600' },
    { label: 'Success Rate', value: '99.2%', change: '+0.1%', color: 'text-green-600' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`text-sm font-medium ${stat.color}`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsDashboard;