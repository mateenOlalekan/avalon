import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would include actual logout logic:
    // - Clear authentication tokens
    // - Clear any user data from state/storage
    // - Call logout API endpoint
    
    // Simulate logout process
    const timer = setTimeout(() => {
      // Redirect to homepage/login after logout
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-red-100 rounded-full">
            <LogOut className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-xl font-bold">Logging Out</h1>
          <p className="mt-2 text-center text-gray-500">
            Please wait while we securely log you out of your account
          </p>
        </div>
        
        <div className="relative">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-600 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
        
        <p className="text-sm text-center text-gray-500">
          You will be redirected to the login page shortly
        </p>
      </div>
    </div>
  );
};

export default LogoutPage;
