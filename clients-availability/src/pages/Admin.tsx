import { useEffect, useState } from 'react';
import axios from 'axios';
import SessionOverview from '../components/SessionOverview';
import './Admin.css'

interface User {
  _id: string;
  email: string;
}

interface Availability {
  _id: string;
  start: string;
  end: string;
}

function Admin() {
  // Use proper typing for the states
  const [users, setUsers] = useState<User[]>([]); // Array of User objects
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Nullable User object
  const [availability, setAvailability] = useState<Availability[]>([]); // Array of Availability objects

  useEffect(() => { 
    // Fetch users from API and set them
    axios.get('https://clients-availability-1.onrender.com/api/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const fetchAvailability = async (userId: string) => {
    try {
      // Fetch availability for the selected user
      const response = await axios.get(`https://clients-availability-1.onrender.com/api/availability/${userId}`);
      setAvailability(response.data);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  return (
    <div className="container-admin">
      <h1>Client Dashboard</h1>
      <select
        className="form-select"
        onChange={(e) => {
          const user = users[parseInt(e.target.value, 10)];
          setSelectedUser(user || null);
        }}
      >
        <option value="">Select User</option>
        {users.map((user, index) => (
          <option key={user._id} value={index.toString()}>
            {user.email}
          </option>
        ))}
      </select>

      <button
        className="btn btn-primary mt-3"
        onClick={() => selectedUser && fetchAvailability(selectedUser._id)}
        disabled={!selectedUser}
      >
        View Availability
      </button>


      {availability.length > 0 && <SessionOverview availability={availability} />}
    </div>
  );
}

export default Admin;
