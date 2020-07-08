import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplate';
import Articles from './Articles';
import Twitters from './Twitters';
import Notes from './Notes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/twitters" component={Twitters} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;