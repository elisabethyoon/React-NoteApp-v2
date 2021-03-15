import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

class Writepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: ""
    };
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSumbitForm = () => {
    const { title, contents } = this.state;
    const apiParams = {
      title,
      contents
    };
    Api.post("posts", apiParams)
      .then(() => {
        alert("글이 등록되었습니다.");
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title, contents } = this.state;
    return (
      <div className="contents">
        <h1 className="page-header list">노트 등록</h1>
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
              <div className="validation-chk">숫자체크</div>
            </div>
            <button
              type="submit"
              className="btn write-btn"
              onClick={this.onSumbitForm}
            >
              등록
            </button>
            <button type="button" className="btn outline write-btn">
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Writepage;
