import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate instead of Navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Navigate to home page or another page on successful login
      navigate("/"); 
      setCredentials({ email: "", password: "" }); // Clear input fields
      setError(""); // Clear any previous errors
    } else {
      setError(data.message || "Something went wrong."); // Display error message
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Sign in to your account
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={credentials.email}
              onChange={onChange}
              className="w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary focus:border-primary"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={credentials.password}
              onChange={onChange}
              className="w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link to="/contact" className="text-sm text-primary hover:underline dark:text-primary-focus">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="w-full py-2.5 bg-primary hover:bg-primary-focus text-white rounded-lg font-medium text-sm">
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          New Here?{' '}
          <Link to="/signup" className="font-medium text-primary hover:underline dark:text-primary-focus">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
