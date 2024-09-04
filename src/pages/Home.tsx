import React from 'react';
import AvailabilityInput from '../components/AvailabilityInput';
import SessionOverview from '../components/SessionOverview';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h2>User Availability and Sessions</h2>
            <AvailabilityInput />
            <SessionOverview />
        </div>
    );
};

export default Home;
