// this file handles API CALLS TO THE BACKEND

import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

//Now you can call getData() inside your React components to interact with the backend.

// 11//mern-project/
// ├── client/               # React frontend
// ├── node_modules/         # Node.js modules for backend
// ├── .env                  # Environment variables
// ├── package.json          # Backend package.json
// ├── server.js             # Backend server
// └── yarn.lock  `           # Yarn lock file
