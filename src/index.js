import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Historia from './Historia';
import Radio from './Radio';
import Contato from './Contato';
import Template from './Template';


ReactDOM.render(
  <BrowserRouter>
    <Template>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/historia" component={Historia} />
        <Route path="/radio" component={Radio} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </Template>
  </BrowserRouter>,

  document.getElementById("root")
);
