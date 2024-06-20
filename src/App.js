import './App.css';
import Nav from './component/Nav';
import Alert from './component/Alert';
import Textbox from './component/Textbox';
import React, { useState } from 'react';
import AboutUs from './component/AboutUs';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert('Enabled dark mode', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Enabled light mode', 'success');
    }
  }

 // const changeToColorMode = () => {
   // if (mode === 'light' || mode === 'dark') {
     // setMode('pink');
      //document.body.style.backgroundColor = '#FFC0CB';
    //} else {
      //setMode('light');
      //document.body.style.backgroundColor = 'white';
    //}
  //}

  return (
    <Router>
      <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* Routes for different components */}
      <Routes>
        {/* Default route */}
        <Route path='/' element={<Textbox mode={mode} showAlert={showAlert} />} />
        <Route path='/about' element={<AboutUs mode={mode} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
