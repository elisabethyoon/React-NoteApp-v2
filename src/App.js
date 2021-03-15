import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import Writepage from "./pages/Writepage";
import UpdatePage from "./pages/UpdatePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route path="/login" component={Loginpage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path={["/", "/main"]} component={MainPage} exact />
          <Route path="/write" component={Writepage} exact />
          <Route path="/update/:userId" component={UpdatePage} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
