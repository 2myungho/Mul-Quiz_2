import React from "react";
import './App.scss';
import QuizPage from "./mul_Quiz/pages/QuizPage";
import registerPage from "./mul_Quiz/pages/registerPage";
import MainPage from "./mul_Quiz/pages/MainPage";
import { Route, Switch, withRouter } from 'react-router-dom';
import "./App.scss";
import {
  SignIn,
  SignUp
} from "./mul_Quiz/MulQuizRoutes";

const App = () => {
  
    return (
      <>
        <Switch>
          <Route component={MainPage} path="/" exact={true} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={registerPage} path="/register" />
          <Route component={QuizPage} path="/Quiz" />
        </Switch>
      </>
    );
}

export default App;
