import './App.css';
import { vocablist } from './vocablist';

function App() {
  const randomNum = Math.floor(Math.random() * vocablist.length);
  return (
    <div className="App">
      <h1>{vocablist[randomNum].FIELD1}</h1>
      <h3>{vocablist[randomNum].FIELD2}</h3>
    </div>
  );
}

export default App;
