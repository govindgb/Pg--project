import React from 'react';
import Header from './components/auth/Header';


 import Login from './components/auth/Login';
 import Signup from './components/auth/Signup'



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      {/* <Header/>
      <Signup/> */}
       <Routes>
        <Route path='/' element={<Header/>}/>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        </Routes>
      
      
      </BrowserRouter>
      
     {/* <Login />  */}
     {/* <Header/> */}
     
    {/* <Signup/> */}
  </div>
  );
}

export default App;
