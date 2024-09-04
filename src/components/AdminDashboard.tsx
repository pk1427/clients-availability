import React, { useState, useEffect } from 'react';
import { getUsers, getUserAvailability, scheduleSession } from '../utils/api';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [availability, setAvailability] = useState([]);
    const [sessionTime, setSessionTime] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const userList = await getUsers();
            setUsers(userList);
        };
        fetchUsers();
    }, []);

    const handleUserSelect = async (email: string) => {
        setSelectedUser(email);
        const availability = await getUserAvailability(email);
        setAvailability(availability);
    };

    const handleSessionSchedule = async () => {
        const session = {
            user: selectedUser,
            start: new Date(sessionTime),
            duration: 30
        };
        await scheduleSession(session);
    };

    return (
        <div className="admin-dashboard-container">
            <h3>Select User</h3>
            <select onChange={(e) => handleUserSelect(e.target.value)}>
                <option value="">Select a user</option>
                {users.map((user: any) => (
                    <option key={user.email} value={user.email}>{user.email}</option>
                ))}
            </select>

            <h4>Availability</h4>
            <ul>
                {availability.map((slot: any, index: number) => (
                    <li key={index}>{slot.start} - {slot.end}</li>
                ))}
            </ul>

            <h4>Schedule Session</h4>
            <input 
                type="datetime-local" 
                value={sessionTime} 
                onChange={(e) => setSessionTime(e.target.value)} 
            />
            <button onClick={handleSessionSchedule}>Schedule</button>
        </div>
    );
};

export default AdminDashboard;
