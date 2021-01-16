import React from "react";
import './App.scss';
import registerPage from "./mul_Quiz/pages/registerPage";
/*import MainPage from "./mul_Quiz/pages/MainPage";*/
import { Route, Switch, withRouter } from 'react-router-dom';
import "./App.scss";
import {
  SignIn,
  SignUp,
  Quiz,
  Nav
} from "./mul_Quiz/MulQuizRoutes";

const App = () => {
  
    return (
      <>
        <Nav />
        <Switch>
          {/*<Route component={MainPage} path="/" exact={true} />*/}
          <Route exact path="/" component={Quiz} exact={true} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={registerPage} path="/register" />
        </Switch>
      </>
    );
}

export default App;
