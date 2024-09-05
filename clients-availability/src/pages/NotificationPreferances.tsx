import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationPreferences: React.FC = () => {
    const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
    const [smsNotifications, setSmsNotifications] = useState<boolean>(false);

    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5500/api/notifications/preferences');
                setEmailNotifications(response.data.emailNotifications);
                setSmsNotifications(response.data.smsNotifications);
            } catch (error) {
                console.error('Error fetching notification preferences:', error);
            }
        };

        fetchPreferences();
    }, []);

    const handleSavePreferences = async () => {
        try {
            await axios.post('http://127.0.0.1:5500/api/notifications/preferences', {
                emailNotifications,
                smsNotifications,
            });
            alert('Preferences saved!');
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    };

    return (
        <div>
            <h1>Notification Preferences</h1>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={emailNotifications} 
                        onChange={() => setEmailNotifications(!emailNotifications)} 
                    />
                    Email Notifications
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={smsNotifications} 
                        onChange={() => setSmsNotifications(!smsNotifications)} 
                    />
                    SMS Notifications
                </label>
            </div>
            <button onClick={handleSavePreferences}>Save Preferences</button>
        </div>
    );
};

export default NotificationPreferences;
