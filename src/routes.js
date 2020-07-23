import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './pages/Search';
import Profile from './pages/Profile';

export default function Routes(){
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/profile" component={Profile} />
         </Switch>
      </Router>
   );
}