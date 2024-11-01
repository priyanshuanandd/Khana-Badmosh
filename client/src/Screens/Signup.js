import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [Credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if password and confirm password match
    if (Credentials.password !== Credentials.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: Credentials.name,
        email: Credentials.email,
        password: Credentials.password
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      setSuccess("Account created successfully!");
      setCredentials({ name: "", email: "", password: "", confirmPassword: "" }); // Clear input fields
      setError(""); // Clear any previous errors
    } else {
      setError(data.message || "Something went wrong.");
      setSuccess(""); // Clear any previous success messages
    }
  };
  
  const onChange = (event) => {
    setCredentials({ ...Credentials, [event.target.name]: event.target.value });
  };
  
  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to='/' className="flex items-center mb-6 text-3xl font-bold text-primary">
          KhanaBadmosh
        </Link>
        <div className="w-full bg-base-100 rounded-lg shadow-md md:mt-0 sm:max-w-md">
          <div className="p-8 space-y-6">
            <h1 className="text-2xl font-bold text-center text-primary">
              Create an Account
            </h1>
            {error && <div className="text-red-500 text-center">{error}</div>}
            {success && <div className="text-green-500 text-center">{success}</div>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-base-content">Name</label>
                <input type="text" name="name" id="name" onChange={onChange} value={Credentials.name} className="input input-bordered w-full" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-base-content">Your email</label>
                <input type="email" name="email" id="email" onChange={onChange} value={Credentials.email} className="input input-bordered w-full" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-base-content">Password</label>
                <input type="password" onChange={onChange} name="password" id="password" placeholder="••••••••" value={Credentials.password} className="input input-bordered w-full" required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-base-content">Confirm password</label>
                <input type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" value={Credentials.confirmPassword} onChange={onChange} className="input input-bordered w-full" required />
              </div>
              <button type="submit" className="btn btn-primary w-full">Create an Account</button>
              <p className="text-sm text-center text-base-content">
                Already have an account? <Link to="/login" className="text-primary">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
