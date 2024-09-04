import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import './Admin.css';

const Admin: React.FC = () => {
    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>
            <AdminDashboard />
        </div>
    );
};

export default Admin;
