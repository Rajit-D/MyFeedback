import "./App.css";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signuppage from "./components/Signuppage";
import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {

  //const navigate = useNavigate();
  
  // const checkIsLoggedIn = ()=>{
  //   if(localStorage.getItem("isLogged"))
  //     navigate("/login");
  // }

  const [alert, setAlert] = useState(null);
  const [isLogged,setIsLogged] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // useEffect(()=>{
  //   checkIsLoggedIn();
  // },[])


  return (
    <>
      <BrowserRouter>
        <Navbar title="MyFeedback.com" logged={setIsLogged} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<div className="my-5 container"><CreatePost /></div>}/>
          <Route path="/signup" element={<Signuppage showAlert={showAlert} isLogged={setIsLogged} />}/>
          <Route path="/login" element={<Login showAlert={showAlert} isLogged={setIsLogged} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
