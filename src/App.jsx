import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './App.module.css';


function App({authService}) {
  return (
    <div className={styles.loginArea}>            
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;