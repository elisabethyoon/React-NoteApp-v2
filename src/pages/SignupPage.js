import React, { useState } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

const info = [
  {
    id: 1,
    title: "타이틀1",
    src: "./images/checkbox.png"
  },
  {
    id: 2,
    title: "타이틀2",
    src: "./images/circle.png"
  },
  {
    id: 3,
    title: "타이틀3",
    src: "./images/edit.png"
  },
  {
    id: 4,
    title: "타이틀4",
    src: "./images/trash.png"
  }
];

function SignupPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    nickname: ""
  });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = () => {
    const { username, password, nickname } = values;
    const apiParams = {
      username,
      password,
      nickname
    };
    Api.post("signup", apiParams)
      .then(({ data }) => {
        alert(`${data.username}님 반갑습니다`);
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="contents">
        <div className="form-wrapper form-wrapper-sm">
          <h1 className="page-header">SIGN UP</h1>
          <ul className="list-menu">
            {/* <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li> */}
            {info.map((item) => {
              return (
                <li>
                  <img src={item.src} alt="1" className="img" />
                  {item.title}
                </li>
              );
            })}
            {/* {images.map(({ id, src, title }) => {
              return <img key={id} src={src} title={title} />;
            })} */}
          </ul>
          <div action="" className="form">
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
                type="text"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={onChangeValue}
              />
            </div>
            <div>
              <label htmlFor="nickname">NICKNAME</label>
              <input
                id="nickname"
                type="text"
                placeholder="nickname"
                name="nickname"
                value={values.nickname}
                onChange={onChangeValue}
              />
            </div>
            <button type="button" className="btn" onClick={onSubmitForm}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
