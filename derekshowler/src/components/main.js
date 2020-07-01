import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landing from './landing';
import Projects from './projects';
import contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path="/" component={landing} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={contact} />
  </Switch>
)

export default Main;