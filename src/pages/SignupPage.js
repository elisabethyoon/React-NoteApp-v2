import React, { Component } from "react";
import Api from "../utils/Api";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nickname: ""
    };
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmitForm = () => {
    const { username, password, nickname } = this.state;
    const apiParams = {
      username,
      password,
      nickname
    };
    Api.post("signup", apiParams)
      .then(({ data }) => {
        alert(`${data.username}님 반갑습니다`);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { username, password, nickname } = this.state;
    return (
      <div>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <h1 className="page-header">SIGN UP</h1>
            <div action="" className="form">
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
                  type="text"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="nickname">NICKNAME</label>
                <input
                  id="nickname"
                  type="text"
                  placeholder="nickname"
                  name="nickname"
                  value={nickname}
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="button" className="btn" onClick={this.onSubmitForm}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
