import axios from 'axios';

const API_URL = 'http://localhost:3000/api/automaton';

export const generateRegex = async (automaton) => {
  try {
    const response = await axios.post(`${API_URL}/generate-regex`, { automaton });
    return response.data;
  } catch (error) {
    console.error('Error generating regex:', error);
    throw error;
  }
};

export const constructAutomaton = async (type, language) => {
  try {
    const response = await axios.post(`${API_URL}/construct`, { type, language });
    return response.data;
  } catch (error) {
    console.error('Error constructing automaton:', error);
    throw error;
  }
};
