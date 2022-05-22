import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Addbook from './component/Addbook';
import Navbar from './component/Navbar';


function App() {
  return (

    <>
  
    
    <BrowserRouter>

    <Routes>

      <Route path="/" exact element={<Login/>}/>
      <Route path="/Register" exact element={<Register/>}/>
      <Route path="/add" exact element={<Addbook/>}/>
     

    </Routes>
    
    
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
