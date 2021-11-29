import logo from './logo.svg';
import './App.css';
// import { Message } from './components/Message';
import React, { useState, useEffect } from "react";


// const message = 'Hello World';
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  }
  const sendMessage = (user, text) => {
    const newMessageList = [...messageList]
    const newMessage = {
      user,
      text,
    }
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }
  const resetValue = () => {
    setValue("");
  }
  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage('user', value);
    resetValue();

  }

  useEffect(() => {
    if (messageList.length === 0) {
      return
    }
    const robot = messageList[messageList.length - 1];

    if (robot.user === 'bot') {
      return
    }
    const timeNew = setTimeout(() => {
      sendMessage('bot', "Напиши что-нибудь")
    }, 1500)
    return () => {
      clearTimeout(timeNew);
    }

  }, [messageList])
  return (
    <div>
      <h1>Lesson 2</h1>
      <ul>
        {
          messageList.map((item) => (<li>
            {item.user} - {item.text}
          </li>))
        }
      </ul>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChangeMessageInput} type="text" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};
// function App() {
//   return (<
//     div className="App" >
//     <h1>Lesson 1</h1>
//   </div>
//   );
// }

export default App;