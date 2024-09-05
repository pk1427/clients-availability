import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection after login

function Login() {
  const [email, setEmail] = useState(''); // State for storing user email input
  const [error, setError] = useState('');  // State for storing error messages
  const navigate = useNavigate(); // Initialize useNavigate for page redirection

  const loginUser = async () => {
    try {
      // Make API call to login the user with the email
      const response = await axios.post('http://localhost:5000/api/users/login', { email });

      if (response.status === 200) {
        // On successful login, store user data and redirect to Admin page
        const userData = response.data;
        console.log('Login successful:', userData);

        // Here you can store user data in localStorage or context if needed
        localStorage.setItem('user', JSON.stringify(userData));

        // Redirect to Admin dashboard (or another page based on user role or need)
        navigate('/home');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed. Please check your email.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {/* Input for email */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-3"
      />

      {/* Button to trigger login */}
      <button className="btn btn-primary" onClick={loginUser}>
        Login
      </button>

      {/* Display error if login fails */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default Login;
