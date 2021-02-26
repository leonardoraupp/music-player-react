import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Radio from './Radio';
import Historia from './Historia';
import Contato from './Contato';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/historia" component={Historia} />
      <Route path="/radio" component={Radio} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
