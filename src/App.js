import './App.css';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signuppage from './components/Signuppage';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  return (
    <>
      <Navbar title="MyFeedback.com" />
      <Alert alert={alert}/>
      {/* <div className="my-5 container">
        <CreatePost/>
      </div> */}
      <Signuppage showAlert={showAlert}/>
      {/* <Login showAlert={showAlert}/> */}
    </>
  );
}

export default App;
