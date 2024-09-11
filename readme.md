# Draw Automaton

DFA and NFA construction from regular expressions. The query (regex) is sent to backend which uses the [automata.js library](https://github.com/hokein/Automata.js) to processthe regex and construct the corresponding automaton in DotScript formatt, the response is received at the frontend and converted to an SVG using `viz` and displayed on the frontend.

## How to Run

1. **Clone the repository:**

git clone <repository-url>
cd drawautomaton

2. Install dependencies:

For backend:

cd server
npm install
    
For frontend:

cd ../client
npm install

3. Run the server:

In the server directory (backend)

npm run dev


In the client directory (frontend)

npm run dev