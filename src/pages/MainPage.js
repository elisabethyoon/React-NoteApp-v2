import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Api from "../utils/Api";
import history from "../utils/history";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // 게시물 목록 가져오기
  fetchList = () => {
    Api.get("posts")
      .then(({ data }) => {
        const { posts } = data;
        this.setState({
          list: posts
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchList();
  }

  updateForm = (_id) => {
    history.push(`/update/${_id}`);
  };

  deleteForm = (_id) => {
    Api.delete(`posts/${_id}`)
      .then(() => {
        alert("삭제가 완료되었습니다.");
        this.fetchList();
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <h1 className="page-header list">노트 리스트</h1>
        <div className="main list-container contents">
          <ul>
            {list.map((item) => {
              return (
                <li key={item._id}>
                  <span className="post-dot"></span>
                  <div className="post-title">{item.title}</div>
                  <div className="post-contents">{item.contents}</div>
                  <div className="post-info">
                    <div className="post-time">{item.updatedAt}</div>
                    <div className="box-icon">
                      <i
                        className="icon ion-md-create"
                        onClick={() => this.updateForm(item._id)}
                      ></i>
                      <i
                        className="icon ion-md-trash"
                        onClick={() => this.deleteForm(item._id)}
                      ></i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="empty-content">
          <h3>등록된 학습노트가 없습니다.</h3>
        </div>
        <NavLink to={"/write"} className="create-button">
          <i className="ion-md-add"></i>
        </NavLink>
      </div>
    );
  }
}

export default MainPage;
