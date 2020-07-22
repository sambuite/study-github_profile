import React from 'react'; 
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Search from './pages/Search';
import Profile from './pages/Profile';

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/profile" component={Profile} />
            <Redirect from='*' to='/' />
         </Switch>
      </BrowserRouter>
   );
}