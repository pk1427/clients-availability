import { useState } from 'react';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import { useNavigate } from 'react-router-dom'; // For redirection after login
import './Login.css';

// Define the expected shape of error response data
interface ErrorResponse {
  message: string;
}

function Login() {
  const [email, setEmail] = useState(''); // State for storing user email input
  const [error, setError] = useState('');  // State for storing error messages
  const navigate = useNavigate(); // Initialize useNavigate for page redirection

  const loginUser = async () => {
    try {
      // Make API call to login the user with the email
      const response = await axios.post(
        'https://clients-availability-1.onrender.com/api/users/login',
        { email },
        { withCredentials: true } // Send credentials (cookies, tokens) if required
      );

      if (response.status === 200) {
        // On successful login, store user data and redirect to Admin page
        const userData = response.data;
        console.log('Login successful:', userData);

        // Store user data in localStorage (or any other state management solution)
        localStorage.setItem('user', JSON.stringify(userData));

        // Redirect to Admin dashboard (or another page based on user role or need)
        navigate('/home');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      const error = err as AxiosError;

      // Check if the error is related to CORS or some other issue
      if (error.response) {
        const responseData = error.response.data as ErrorResponse; // Type assertion for error response
        setError(responseData.message || 'Login failed. Please check your email.');
      } else if (error.request) {
        // Request was made but no response received
        setError('No response from server. Please check your connection.');
      } else {
        // Other errors (like CORS)
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="container-login">
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
