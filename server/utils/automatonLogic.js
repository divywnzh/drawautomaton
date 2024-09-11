// utils/automatonLogic.js
var regParser = require('automata.js');

// function for DFA construction
function constructDFA(language) {

    var parser = new regParser.RegParser(language);
    var dfa = parser.parseToDFA();
    var resdfa = dfa.toDotScript();

    console.log(`Constructing DFA for language: ${language}`);
    
    var resdfa = resdfa.replace(
      "digraph finite_state_machine {",
      `digraph finite_state_machine {
      bgcolor = transparent;
      node [color="#FFCC00", fontcolor="#FFCC00"]; 
      edge [color="#FFCC00", fontcolor="#FFCC00"]; `
    );
    return resdfa

  }
  
  // function for NFA construction
  function constructNFA(language) {

    var parser = new regParser.RegParser(language);
    var nfa = parser.parseToNFA();
    var resnfa = nfa.toDotScript();

    console.log(`Constructing NFA for language: ${language}`);

    var resnfa = resnfa.replace(
      "digraph finite_state_machine {",
      `digraph finite_state_machine {
      bgcolor = transparent;
      node [color="#FFCC00", fontcolor="#FFCC00"]; 
      edge [color="#FFCC00", fontcolor="#FFCC00"]; `
    );
    return resnfa
  }
  
  // Placeholder function for regex generation
  function generateRegex(automaton) {
    // placeholder for logic
    console.log('Generating regex from automaton:', automaton);
    return '(a|b)*abb';  // Example regex
  }
  
  module.exports = {
    constructDFA,
    constructNFA,
    generateRegex,
  };