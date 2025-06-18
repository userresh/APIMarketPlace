import React, { useState } from 'react';
import { Star, Users, CheckCircle, Eye } from 'lucide-react';

const APICard = ({ api }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${api.color}`}>
            <api.icon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{api.name}</h3>
            <p className="text-sm text-gray-500">{api.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{api.rating}</span>
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{api.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          api.plan === 'Free' ? 'bg-green-100 text-green-800' :
          api.plan === 'Pro' ? 'bg-blue-100 text-blue-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {api.plan}
        </span>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          {api.subscribers}
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => setIsSubscribed(!isSubscribed)}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isSubscribed
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSubscribed ? (
            <>
              <CheckCircle className="inline h-4 w-4 mr-1" />
              Subscribed
            </>
          ) : (
            'Subscribe'
          )}
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Eye className="inline h-4 w-4 mr-1" />
          Preview
        </button>
      </div>
    </div>
  );
};

export default APICard;