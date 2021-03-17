import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import history from "./utils/history";
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
      token: localStorage.getItem("token") || ""
    };
  }

  userToken = (token) => {
    this.setState({
      token: token
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      token: ""
    });
    history.push("/login");
  };

  render() {
    const { token } = this.state;
    return (
      <div>
        <AppHeader token={token} logout={this.logout} />
        <Switch>
          <Route
            path="/login"
            render={() => <Loginpage userToken={this.userToken} />}
            exact
          />
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
