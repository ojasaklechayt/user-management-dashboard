// client/src/services/api.js

import axios from 'axios';

// Define the base URL of the backend API
const API_URL = 'http://localhost:5000/api/users';

// Get all users with pagination
export const getUsers = async (page) => {
    const response = await axios.get(API_URL, {
        params: { page, limit: 10 },
    });
    console.log(response);
    return response.data;
};

// Get a single user by ID
export const getUser = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Create a new user
export const createUser = async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

// Update an existing user by ID
export const updateUser = async (id, user) => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
};

// Delete a user by ID
export const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
