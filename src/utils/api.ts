import axios from 'axios';

export const postAvailability = async (availability: any) => {
    await axios.post('/api/availability', availability);
};

export const getUsers = async () => {
    const response = await axios.get('/api/users');
    return response.data;
};

export const getUserAvailability = async (email: string) => {
    const response = await axios.get(`/api/availability/${email}`);
    return response.data;
};

export const scheduleSession = async (session: any) => {
    await axios.post('/api/sessions', session);
};

export const getUserSessions = async () => {
    const response = await axios.get('/api/sessions');
    return response.data;
};
