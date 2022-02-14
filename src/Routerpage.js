import React from 'react'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
// import Navigate from "react-router-dom";
import Home from './pages/Home';
import Vegtablsearch from './pages/Vegtablsearch';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';

export default function Routerpage() {
  return (
    <>
    
        <Router>
        <Route path="/" component={Home} exact/> 
        <Route path="/Vegtablsearch" component={Vegtablsearch}/> 
        <Route path="/login" component={Login}/> 
        <Route path="/register" component={RegisterPage}/> 

        </Router>

        {/* <Router>
        <Route path="/" component={<ProtectedRoutes><Home/></ProtectedRoutes>} exact/> 
        <Route path="/Vegtablsearch" component={<ProtectedRoutes><Vegtablsearch/></ProtectedRoutes>}/> 
        <Route path="/login" component={Login}/> 
        <Route path="/register" component={RegisterPage}/> 

        </Router> */}
    </>
  )
}


// export const ProtectedRoutes= ({children})=>{

//   if(localStorage.getItem('currentUser')){
  
//   return children
//   }
  
//   else{
  
//  return <Navigate to='/login' />
//   }

// }