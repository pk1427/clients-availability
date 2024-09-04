import React from 'react';
import AvailabilityInput from '../components/AvailabilityInput';
import SessionOverview from '../components/SessionOverview';

const Home: React.FC = () => {
    return (
        <div>
            <h2>User Availability and Sessions</h2>
            <AvailabilityInput />
            <SessionOverview />
        </div>
    );
};

export default Home;
