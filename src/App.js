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
          <Route path="/login" component={Loginpage} />
          <Route path="/signup" component={SignupPage} />
          <Route path={["/", "/main"]} component={MainPage} />
          <Route path="/write" component={Writepage} />
          <Route path="/update/:userId" component={UpdatePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
