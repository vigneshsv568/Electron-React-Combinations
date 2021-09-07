import React from 'react';
import HomeView from './views/Home';
import Navbar from './components/Navbar';
import Settings from './views/Settings';
import Register from './views/Register';
import Login from './views/Login';
import Chat from './views/Chat';
import {
    HashRouter as Router,
    Switch,
    Route
}from 'react-router-dom';
export default function App(){



 return(
   
     <Router>
          <Navbar />
          <div className='content-wrapper'>
         <Switch>
         <Route path="/" exact>
             <HomeView />
                 </Route>
             <Route path="/chat/:id">
                 <Chat />
             </Route> 
             <Route path="/settings">
                 <Settings />
             </Route>
             <Route path="/login">
                 <Login />
             </Route>
             <Route path="/register">
                 <Register />
             </Route>
            
         </Switch>
         </div>
     </Router>
 
 )
   
   
}