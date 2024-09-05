import { useState } from 'react';
import axios from 'axios';

// Define the Availability and SessionOverviewProps interfaces
interface Availability {
  _id: string;
  start: string;  // start and end are strings since you are dealing with ISO date strings
  end: string;
}

interface SessionOverviewProps {
  availability: Availability[];
}

function SessionOverview({ availability }: SessionOverviewProps) {
  const [selectedSlot, setSelectedSlot] = useState<Availability | null>(null); // Typing the selectedSlot state

  const handleSchedule = async () => {
    if (!selectedSlot) return;

    try {
      // Assuming you have an API endpoint for scheduling sessions
      const response = await axios.post('https://clients-availability-1.onrender.com/api/schedule', {
        user: 'Admin', // Replace this with a dynamic user if necessary
        start: selectedSlot.start,
        end: selectedSlot.end,
        attendees: [{ name: 'Admin', email: 'admin@example.com' }],
        type: 'one-on-one',
      });
      alert('Session scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling session:', error);
      alert('Failed to schedule session. Please check the console for details.');
    }
  };

  return (
    <div>
        
      <h1> Available Clients</h1>
      <select
        onChange={(e) => setSelectedSlot(JSON.parse(e.target.value))}
        className="form-select"
      >
        <option value="">Select a slot</option>
        {availability.map((slot) => (
          <option key={slot._id} value={JSON.stringify(slot)}>
            {new Date(slot.start).toLocaleString()} - {new Date(slot.end).toLocaleString()}
          </option>
        ))}
      </select>
      <button onClick={handleSchedule} className="btn btn-success mt-3">
        Schedule Session
      </button>
    </div>
  );
}

export default SessionOverview;
