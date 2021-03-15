import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmitForm = () => {
    const { username, password } = this.state;
    const apiParams = {
      username,
      password
    };
    Api.post("login", apiParams)
      .then(({ data }) => {
        const token = data.token;
        localStorage.setItem("token", token);
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <h1 className="page-header">Login</h1>
            <div className="form">
              <div>
                <label htmlFor="username">ID</label>
                <input
                  id="username"
                  type="text"
                  placeholder="ID"
                  name="username"
                  value={username}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">PW</label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="button" className="btn" onClick={this.onSubmitForm}>
                LOG IN
              </button>
            </div>
            <p className="log"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
