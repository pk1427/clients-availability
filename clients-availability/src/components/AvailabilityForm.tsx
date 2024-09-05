import { useState } from 'react';
import axios from 'axios';
import './AvailabilityForm.css'

interface AvailabilityFormProps {
  user: string; // Expecting the user ID as a string
}

function AvailabilityForm({ user }: AvailabilityFormProps) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duration, setDuration] = useState(30);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Posting availability to the backend API
      const response = await axios.post('https://clients-availability-1.onrender.com/api/availability', {
        user,
        start,
        end,
        duration,
      });

      if (response.status === 201) {
        alert('Availability added successfully!');
        // Reset form values after successful submission
        setStart('');
        setEnd('');
        setDuration(30);
      } else {
        alert('Failed to add availability. Please try again.');
      }
    } catch (error) {
      console.error('Error adding availability:', error);
      alert('An error occurred while adding availability. Please check the console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label>Start Time</label>
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>End Time</label>
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Duration (Minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Availability
      </button>
    </form>
  );
}

export default AvailabilityForm;
