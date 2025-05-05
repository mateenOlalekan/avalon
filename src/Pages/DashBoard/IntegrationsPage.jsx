import { Grid, ExternalLink, Check, X } from 'lucide-react';

// Sample integrations data
const integrations = [
  {
    id: 1,
    name: "Stripe",
    description: "Accept payments and manage your business's financial needs",
    logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    category: "Payments",
    status: "Connected",
    statusColor: "green"
  },
  {
    id: 2,
    name: "PayPal",
    description: "Online payment system that supports online money transfers",
    logo: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
    category: "Payments",
    status: "Connected",
    statusColor: "green"
  },
  {
    id: 3,
    name: "Google Analytics",
    description: "Track website traffic, user behavior and conversion metrics",
    logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    category: "Analytics",
    status: "Not connected",
    statusColor: "gray"
  },
  {
    id: 4,
    name: "Mailchimp",
    description: "Marketing automation platform and email marketing service",
    logo: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
    category: "Marketing",
    status: "Connected",
    statusColor: "green"
  },
  {
    id: 5,
    name: "Facebook Ads",
    description: "Advertise your products on Facebook and Instagram",
    logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    category: "Marketing",
    status: "Not connected",
    statusColor: "gray"
  },
  {
    id: 6,
    name: "Shopify",
    description: "Sync products, inventory and orders with your Shopify store",
    logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    category: "Ecommerce",
    status: "Not connected",
    statusColor: "gray"
  },
  {
    id: 7,
    name: "Slack",
    description: "Get real-time notifications about your store activities",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
    category: "Communication",
    status: "Connected",
    statusColor: "green"
  },
  {
    id: 8,
    name: "Quickbooks",
    description: "Sync orders and expenses for accounting and tax purposes",
    logo: "https://www.vectorlogo.zone/logos/intuit/intuit-icon.svg",
    category: "Accounting",
    status: "Not connected",
    statusColor: "gray"
  },
  {
    id: 9,
    name: "HubSpot",
    description: "CRM platform to track customer data and improve relationships",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    category: "CRM",
    status: "Not connected",
    statusColor: "gray"
  }
];

// Categories for filtering
const categories = ["All", "Payments", "Analytics", "Marketing", "Ecommerce", "Communication", "Accounting", "CRM"];

const IntegrationsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Grid size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Integrations</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
          Add New
        </button>
      </div>

      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <p className="text-gray-600 mb-4">
          Connect your Ex Com store with your favorite business tools to streamline your operations.
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button 
              key={category}
              className="px-4 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div 
            key={integration.id}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="w-10 h-10 object-contain"
                />
                <div className="ml-3">
                  <h3 className="font-medium">{integration.name}</h3>
                  <span className="text-xs text-gray-500">{integration.category}</span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs ${
                integration.statusColor === 'green' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {integration.status === "Connected" ? (
                  <div className="flex items-center">
                    <Check size={12} className="mr-1" /> 
                    <span>Connected</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <X size={12} className="mr-1" /> 
                    <span>Not connected</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {integration.description}
            </p>
            
            <div className="flex justify-between items-center">
              <button className={`${
                integration.status === "Connected" 
                  ? 'text-red-600 hover:text-red-800' 
                  : 'text-green-600 hover:text-green-800'
              } text-sm font-medium`}>
                {integration.status === "Connected" ? "Disconnect" : "Connect"}
              </button>
              <button className="text-gray-500 hover:text-gray-800 flex items-center text-sm">
                <span>Settings</span>
                <ExternalLink size={14} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium mb-2">Need a custom integration?</h3>
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for? We can help you build custom integrations with your existing tools.
        </p>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md">
          Contact Support
        </button>
      </div>
    </>
  );
};

export default IntegrationsPage;