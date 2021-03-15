import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

class UpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: ""
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    Api.get(`posts/${userId}`)
      .then(({ data }) => {
        const { title, contents } = data;
        this.setState({
          title,
          contents
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  UpdateComplete = () => {
    const userId = this.props.match.params.userId;
    const { title, contents } = this.state;
    Api.put(`posts/${userId}`, {
      title,
      contents
    })
      .then(() => {
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title, contents } = this.state;
    return (
      <div className="contents">
        <h1 className="page-header list">노트 수정</h1>
        <div className="form-wrapper">
          <div>
            <div className="form">
              <label htmlFor="Title" className="write-title">
                Title
              </label>
              <input
                type="text"
                id="Title"
                name="title"
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={this.onChangeValue}
              />
            </div>
            <div className="form">
              <label htmlFor="Contents" className="write-title">
                Contents
              </label>
              <textarea
                name="contents"
                id="Contents"
                placeholder="내용을 입력해주세요."
                value={contents}
                onChange={this.onChangeValue}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn write-btn"
              onClick={this.UpdateComplete}
            >
              수정완료
            </button>
            <button type="button" className="btn outline write-btn">
              취소
            </button>
          </div>
          {/* <p className="log">에러</p> */}
        </div>
      </div>
    );
  }
}

export default UpdatePage;
