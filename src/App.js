import './App.css';
import Nav from './component/Nav';
import Alert from './component/Alert';
import Textbox from './component/Textbox';
import React, { useState} from 'react';
//import AboutUs from './component/AboutUs';

{/*import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom" */}


function App() {
  const [alert , setAlert]= useState(null);
  const showAlert = ( message, type) =>{
    setAlert({
           msg: message ,
           type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const [mode , setMode] = useState('light');
  let toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert('enabled dark mode','success');
    }
  
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('enabled light mode','success');

  }
}
 let changetoColormode = () =>{
  if(mode==='light'|| mode==='dark'){
    setMode('pink')
    document.body.style.backgroundColor = '#FFC0CB';
    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
  }
 }


  return (
   <>
    {/*<Router>*/}
   <Nav title ='TextUtils' mode={mode} toggleMode={toggleMode} changetoColormode={changetoColormode}/>
   <Alert alert={alert}/>
     {/* <Routes>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/' element={<Textbox mode={mode} showAlert={showAlert} />} />

      </Routes>
    </div>

    </Router> */}
    <Textbox mode={mode} showAlert={showAlert}/>
  
   </>
  );
}

export default App;
