const express = require('express');
const cors = require('cors');
const automatonRoutes = require('./routes/automaton');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/automaton', automatonRoutes); //the request /api/automaton will be handled by automaton.js in routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));