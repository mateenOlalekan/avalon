import { useState } from 'react';

import { Settings, User, Store, CreditCard, Bell, Lock, Mail, Globe } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Settings size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <nav className="space-y-1">
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'account' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('account')}
            >
              <User size={18} className="mr-3" />
              <span>Account</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'store' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('store')}
            >
              <Store size={18} className="mr-3" />
              <span>Store Profile</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'payment' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('payment')}
            >
              <CreditCard size={18} className="mr-3" />
              <span>Payment Methods</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'notifications' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={18} className="mr-3" />
              <span>Notifications</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'security' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('security')}
            >
              <Lock size={18} className="mr-3" />
              <span>Security</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'email' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('email')}
            >
              <Mail size={18} className="mr-3" />
              <span>Email Settings</span>
            </button>
            
            <button
              className={`flex items-center w-full p-3 rounded-lg text-left ${
                activeTab === 'website' 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('website')}
            >
              <Globe size={18} className="mr-3" />
              <span>Website Settings</span>
            </button>
          </nav>
        </div>
        
        {/* Settings Content */}
        <div className="md:col-span-3">
          {activeTab === 'account' && (
            <div className="bg-white rounded-lg shadow-sm">
              {/* Profile Section */}
              <div className="p-6 border-b">
                <h2 className="text-lg font-medium mb-4">Your Profile</h2>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="space-y-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                        Change Photo
                      </button>
                      <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50">
                        Remove
                      </button>
                      <p className="text-gray-500 text-sm">Recommended: Square JPG, PNG, or GIF, at least 300x300 pixels</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Personal Information */}
              <form className="p-6">
                <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Sifat"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Hasan"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="sifat@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                      defaultValue="Store manager and marketing specialist with 5+ years of experience in e-commerce."
                    />
                    <p className="mt-1 text-sm text-gray-500">Brief description for your profile.</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button type="button" className="mr-3 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab !== 'account' && (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-medium mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
              </h3>
              <p className="text-gray-500 mb-4">
                This is where you'll manage your {activeTab} settings and preferences
              </p>
              <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                <p className="text-gray-400">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings content will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
