import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { postAvailability } from '../utils/api';

const AvailabilityInput: React.FC = () => {
    const { user } = useContext(AuthContext);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async () => {
        const availability = {
            user: user?.email,
            start: new Date(`${date}T${startTime}`),
            end: new Date(`${date}T${endTime}`),
            duration: 30
        };
        await postAvailability(availability);
    };

    return (
        <div>
            <h3>Set Your Availability</h3>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />
            <input 
                type="time" 
                value={startTime} 
                onChange={(e) => setStartTime(e.target.value)} 
            />
            <input 
                type="time" 
                value={endTime} 
                onChange={(e) => setEndTime(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AvailabilityInput;
