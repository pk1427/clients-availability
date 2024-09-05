import { useState } from 'react';
import axios from 'axios';
import AvailabilityForm from '../components/AvailabilityForm'; // Assuming this component exists
import './Home.css'

interface User {
  _id: string;
  email: string;
}

function Home() {
  // Define user state with proper type
  const [user, setUser] = useState<User | null>(null);

  // loginUser function with TypeScript typing for email
  const loginUser = async (email: string) => {
    try {
      const response = await axios.post('https://clients-availability-1.onrender.com/api/users/login', { email });
      setUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your email.');
    }
  };

  return (
    <div className="container-home">
      <h1>Schedule Your Avalability</h1>
      {/* Input field for entering email */}
      <input
        type="email"
        placeholder="Enter your email"
        onBlur={(e) => loginUser(e.target.value)}
        className="form-control mb-3"
      />

      {/* Conditionally render AvailabilityForm if the user is logged in */}
      {user && <AvailabilityForm user={user._id} />}
    </div>
  );
}

export default Home;
