# Draw Automaton

DFA and NFA construction from regular expressions. The query (regex) is sent to backend which uses the [automata.js](https://github.com/hokein/Automata.js) library to process the regex and construct the corresponding automaton. The DotScript response is sent to the frontend and converted to an SVG using [`viz`](https://github.com/mdaines/viz-js) and displayed on the frontend.

## How to Run

1. **Clone the repository:**

```bash
git clone https://github.com/divywnzh/drawautomaton.git
cd drawautomaton
```

2. Install dependencies:

For backend:

```bash
cd server
npm install
```
For frontend:
```bash
cd ../client
npm install
```
3. Run the server:

In the server directory (backend)
```bash
npm run dev
```

In the client directory (frontend)
```bash
npm run dev
```