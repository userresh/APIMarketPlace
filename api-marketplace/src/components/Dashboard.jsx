import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust path if needed
import Header from './Header';
import Sidebar from './Sidebar';
import AnalyticsDashboard from './AnalyticsDashboard'; // If this exists
import APICard from './APICard'; // If this exists
import { Globe, CreditCard, Zap, TrendingUp, Search, Filter } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();

  const featuredAPIs = [
    {
      id: 1,
      name: 'Weather API',
      category: 'Weather',
      description: 'Get real-time weather data for any location worldwide with detailed forecasts and historical data.',
      rating: 4.8,
      subscribers: '12.5K',
      plan: 'Free',
      icon: Globe,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Payment Gateway',
      category: 'Finance',
      description: 'Secure payment processing with support for major credit cards and digital wallets.',
      rating: 4.9,
      subscribers: '8.2K',
      plan: 'Pro',
      icon: CreditCard,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'AI Translation',
      category: 'AI/ML',
      description: 'Advanced machine translation supporting 100+ languages with context awareness.',
      rating: 4.7,
      subscribers: '15.3K',
      plan: 'Enterprise',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Social Media Analytics',
      category: 'Analytics',
      description: 'Comprehensive social media metrics and engagement analytics across platforms.',
      rating: 4.6,
      subscribers: '6.1K',
      plan: 'Pro',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-4 md:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name?.split(' ')[0]}!
            </h2>
            <p className="text-gray-600">
              Discover and integrate powerful APIs to accelerate your development.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <AnalyticsDashboard />

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search APIs..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Weather', 'Finance', 'AI/ML', 'Analytics', 'Social Media'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured APIs */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Featured APIs</h3>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View all →
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredAPIs.map((api) => (
                <APICard key={api.id} api={api} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'API Call', api: 'Weather API', time: '2 minutes ago', status: 'success' },
                { action: 'Subscription', api: 'Payment Gateway', time: '1 hour ago', status: 'success' },
                { action: 'API Call', api: 'AI Translation', time: '3 hours ago', status: 'error' },
                { action: 'Documentation', api: 'Social Media Analytics', time: '1 day ago', status: 'info' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'error' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action} - {activity.api}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.status === 'success' ? 'bg-green-100 text-green-800' :
                    activity.status === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;