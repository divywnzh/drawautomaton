// routes/automaton.js
const express = require('express');
const router = express.Router();
const { constructDFA, constructNFA, generateRegex } = require('../utils/automatonLogic');

router.post('/generate-regex', (req, res) => {
  try {
    const { automaton } = req.body;
    const regex = generateRegex(automaton);
    res.json({ regex });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/construct', (req, res) => {
  try {
    const { type, language } = req.body;
    let automaton;
    if (type === 'DFA') {
      automaton = constructDFA(language);
    } else if (type === 'NFA') {
      automaton = constructNFA(language);
    } else {
      throw new Error('Invalid automaton type');
    }
    res.json(automaton);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;