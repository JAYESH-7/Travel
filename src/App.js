import React from 'react'
import{BrowserRouter,Routes,Route,} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Boot } from './components/Boot';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' exact Component={Home} />
    <Route path='/services' Component={Services} />
    <Route path='/products' Component={Products} />
    <Route path='/sign-up' Component={SignUp} />
    {/* <Route path='/Boot' Component={Boot} /> */}
   </Routes>
   <footer></footer>
   </BrowserRouter>
        
        </>
  );
}

export default App;
