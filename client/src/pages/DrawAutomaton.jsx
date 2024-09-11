import React, { useState } from 'react';
import AutomatonCanvas from '../components/AutomatonCanvas';
import { generateRegex } from '../utils/api';

function DrawAutomaton() {
  const [automaton, setAutomaton] = useState({ states: [], transitions: [], initialState: '', finalStates: [] });
  const [regex, setRegex] = useState('');

  const handleAutomatonUpdate = (updatedAutomaton) => {
    setAutomaton(updatedAutomaton);
  };

  const handleGenerateRegex = async () => {
    try {
      const result = await generateRegex(automaton);
      setRegex(result.regex);
    } catch (error) {
      console.error('Error generating regex:', error);
    }
  };

  return (
    <div>
      <h1>Draw Automaton</h1>
      <AutomatonCanvas automaton={automaton} onUpdate={handleAutomatonUpdate} />
      <button onClick={handleGenerateRegex}>Generate Regex</button>
      {regex && <p>Regular Expression: {regex}</p>}
    </div>
  );
}

export default DrawAutomaton;