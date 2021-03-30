// react-router-dom, firebase는 npm으로 설치 완료된 상태
import React, {useState, useEffect} from 'react';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import './app.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App({authService}) {
  
  return (
    <BrowserRouter>
    <div className="cardMaker">            
      <Switch>
        <Route path="/" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker authService={authService} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;