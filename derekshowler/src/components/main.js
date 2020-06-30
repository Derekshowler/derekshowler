import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landing from './landing';
import about from './about';
import contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path="/" component={landing} />
    <Route path="/aboutme" component={about} />
    <Route path="/contact" component={contact} />
  </Switch>
)

export default Main;