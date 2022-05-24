import logo from './logo.svg';
import './App.css';
import EventSource from 'both-sse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            const eventsource = new EventSource('http://localhost:30000/ping')
            eventsource.onopen = () => {
              console.log('open')
            }
            eventsource.onmessage = (ev) => {
              console.log('message : ', ev.data)
            }
            eventsource.onerror = (ev) => {
              console.log('error : ', ev.data)
            }
          }}
        >Start SSE</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
