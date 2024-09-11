import React, { useState } from 'react';
import { constructAutomaton } from '../utils/api';

import { instance } from '@viz-js/viz';

function ConstructAutomaton() {
  const [language, setLanguage] = useState('');
  const [type, setType] = useState('DFA');
  const [automaton, setAutomaton] = useState(null);

  const handleConstruct = async () => {
    try {
      const result = await constructAutomaton(type, language);
      if (result) {
        // Obtain the viz instance
        const viz = await instance();
        
        // Render the DOT script to SVG
        const svgElement = viz.renderSVGElement(result);
        
        // Convert SVG element to string
        const svgString = new XMLSerializer().serializeToString(svgElement);
        
        setAutomaton(svgString);
      }
    } catch (error) {
      console.error('Error constructing automaton:', error);
    }
  };

  console.log(language)

  return (
    <div>
      <h1>Construct Automaton</h1>
      <input
        type="text"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="Enter language"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="DFA">DFA</option>
        <option value="NFA">NFA</option>
      </select>
      <button onClick={handleConstruct}>Construct</button>
      {automaton && (
        <div>
          <h2>Constructed Automaton:</h2>
          <div className="svg-container">
            <div dangerouslySetInnerHTML={{ __html: automaton }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConstructAutomaton;