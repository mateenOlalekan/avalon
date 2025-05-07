import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ShoppingBag, ArrowRight } from "lucide-react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../Context/auth";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.error("Sign-in error:", error);
      let errorMessage = "Sign in failed. Please try again.";
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many attempts. Try again later or reset your password.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await doSignInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      let errorMessage = "Failed to sign in with Google. Please try again.";

      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Sign in popup was closed. Please try again.";
      } else if (error.code === "auth/account-exists-with-different-credential") {
        errorMessage = "An account already exists with this email. Try signing in with email/password.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full h-screen flex bg-white rounded-2xl overflow-hidden">
        {/* Left Branding Section */}
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Shopping background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-600/10" />
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-between h-full">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">ShopEase</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
              <p className="text-green-100 text-lg">
                Sign in to access your personalized shopping experience.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-green-100">
              <span className="text-lg">New to ShopEase?</span>
              <Link
                to="/signup"
                className="font-medium text-white hover:underline flex items-center text-lg"
              >
                Create account <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="md:hidden flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-gray-800">ShopEase</span>
              </div>
            </div>
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
              <p className="text-gray-500 mt-3 text-lg">
                Access your orders, wishlist, and more
              </p>
            </div>

            {error && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="ml-3 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg shadow-sm text-lg font-medium text-white ${
                    loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 text-base">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-base font-medium"
                >
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  <span className="ml-3">Sign in with Google</span>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              New to ShopEase?{" "}
              <Link to="/signup" className="text-green-600 hover:text-green-500 font-medium">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
