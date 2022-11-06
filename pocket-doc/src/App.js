import './App.css';
import Chatbot from './chatbot'
import Splash from './splash'

function App() {
  return (
    <body>
      <Splash />
      <div class="splash">
        <h1 class="fade-in">Welcome to Pocket doc.</h1>
      </div>
      <div class="center">
        <p>Take a seat. How do you feel? </p>
        <Chatbot />
      </div>
    </body>
  );
}

export default App;
