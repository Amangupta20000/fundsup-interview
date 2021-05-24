import React from 'react'
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Investors from './Investors';
import Founders from './Founders';
import Patners from './Patners';
import News from './News';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <div>
        <Navbar/>
         <Switch>
         <Route path="/" component ={Home} exact />
         <Route path="/investors" component ={Investors} exact />
         <Route path="/founders" component ={Founders} exact />
         <Route path="/patners" component ={Patners} exact />
         <Route path="/about" component ={About} exact/>
         <Route path="/news" component ={News} exact />
         <Route path="/login" component ={Login} exact />
         <Route path="/signup" component ={Signup} exact/>
          
          </Switch>
        </div>
    )
}

export default App
