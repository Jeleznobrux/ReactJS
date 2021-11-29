import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';

const message = 'Hello World';

function App() {
  return (<
    div className="App" >
    <h1>Lesson 1</h1>
    <Message message={message} />
  </div>
  );
}

export default App;