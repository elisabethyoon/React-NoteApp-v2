import React, { useState, useEffect } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

function UpdatePage({ match }) {
  const [values, setValues] = useState({ title: "", contents: "" });

  const getPostInfo = (userId) => {
    Api.get(`posts/${userId}`)
      .then(({ data }) => {
        const { title, contents } = data;
        setValues({ title, contents });
        // this.setState({
        //   title: data.title,
        //   contents
        // });
      })
      .catch((err) => console.log(err));
  };

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const UpdateComplete = () => {
    const userId = match.params.userId;
    const { title, contents } = values;
    Api.put(`posts/${userId}`, {
      title,
      contents
    })
      .then(() => {
        history.push("/main");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(111);
    const userId = match.params.userId;
    getPostInfo(userId);
  }, []);

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
              value={values.title}
              onChange={onChangeValue}
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
              value={values.contents}
              onChange={onChangeValue}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn write-btn"
            onClick={UpdateComplete}
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

export default UpdatePage;
