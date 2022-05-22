import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import   'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Addbook from './component/Addbook';
import Navbar from './component/Navbar';

import View from './component/View';


function App() {
  return (

    <>
  
    
    <BrowserRouter>

    <Routes>

      <Route path="/" exact element={<Login/>}/>
      <Route path="/Register" exact element={<Register/>}/>
     <Route path="/add" exact element={<Addbook/>}/>
      <Route path="/view" exact element={<View/>}/>
     

    </Routes>
    
    
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
