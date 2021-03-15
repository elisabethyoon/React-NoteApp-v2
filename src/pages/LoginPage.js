import React, { useState } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

function LoginPage() {
  const [values, setValues] = useState({ username: "", password: "" });

  const onChangeValue = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = () => {
    const { username, password } = values;
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
                value={values.username}
                onChange={onChangeValue}
              />
            </div>
            <div>
              <label htmlFor="password">PW</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={onChangeValue}
              />
            </div>
            <button type="button" className="btn" onClick={onSubmitForm}>
              LOG IN
            </button>
          </div>
          <p className="log"></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
