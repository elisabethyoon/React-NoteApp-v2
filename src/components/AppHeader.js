import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AppHeader extends Component {
  render() {
    console.log("header render", this.props.token);
    const { token } = this.props;
    return (
      <header>
        <NavLink to="/" className="logo">
          NOTE
        </NavLink>
        <div className="navigations">
          {token ? (
            <button>로그아웃</button>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </>
          )}
        </div>
      </header>
    );
  }
}

export default AppHeader;
