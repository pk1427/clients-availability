import React, { useState, useEffect } from 'react';
import { getUserSessions } from '../utils/api';

const SessionOverview: React.FC = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const sessionList = await getUserSessions();
            setSessions(sessionList);
        };
        fetchSessions();
    }, []);

    return (
        <div>
            <h3>Upcoming Sessions</h3>
            <ul>
                {sessions.map((session: any, index: number) => (
                    <li key={index}>
                        {session.start} - {session.end} with {session.attendees.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SessionOverview;
