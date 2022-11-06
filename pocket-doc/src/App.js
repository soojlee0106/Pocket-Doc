import './App.css';
import Chatbot from './chatbot'
import Splash from './splash'

function App() {
  return (
    <body>
      <Splash />
      <div class="center">
        <p>Take a seat.</p>
        <Chatbot />
      </div>
    </body>
  );
}

export default App;
