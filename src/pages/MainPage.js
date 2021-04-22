import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Api from "../utils/Api";
import history from "../utils/history";
import MenuList from "../container/MenuList";
import ServiceList from "../container/ServiceList";
import Review from "../container/Review";

const infoList = [
  {
    id: 1,
    title: "타이틀1",
    src: "./images/checkbox.png",
    type: "menu"
  },
  {
    id: 2,
    title: "타이틀2",
    src: "./images/circle.png",
    type: "menu"
  },
  {
    id: 3,
    title: "타이틀3",
    src: "./images/edit.png",
    type: "menu"
  },
  {
    id: 4,
    title: "타이틀4",
    src: "./images/trash.png",
    type: "menu"
  },
  {
    id: 5,
    title: "1",
    src: "./images/betty.png",
    type: "service"
  },
  {
    id: 6,
    title: "2",
    src: "./images/el.png",
    type: "service"
  },
  {
    id: 7,
    title: "3",
    src: "./images/elisabeth.jpg",
    type: "service"
  }
];

const ReviewList = [
  {
    id: 1,
    title: "국어",
    scope: "3"
  },
  {
    id: 2,
    title: "영어",
    scope: "4"
  },
  {
    id: 3,
    title: "수학",
    scope: "5"
  }
];

const imgArr = [
  {
    src: "./images/star3.png",
    scope: "3"
  },
  {
    src: "./images/star4.png",
    scope: "4"
  },
  {
    src: "./images/star5.png",
    scope: "5"
  }
];

// const serviceList = [
//   {
//     id: 1,
//     title: "1",
//     src: "./images/betty.png"
//   },
//   {
//     id: 2,
//     title: "2",
//     src: "./images/el.png"
//   },
//   {
//     id: 3,
//     title: "3",
//     src: "./images/elisabeth.jpg"
//   }
// ];

function MainPage() {
  const [list, setList] = useState([]);

  // 게시물 목록 가져오기
  const fetchList = () => {
    Api.get("posts")
      .then(({ data }) => {
        const { posts } = data;
        setList(posts);
      })
      .catch((err) => console.log(err));
  };

  const updateForm = (_id) => {
    history.push(`/update/${_id}`);
  };

  const deleteForm = (_id) => {
    Api.delete(`posts/${_id}`)
      .then(() => {
        alert("삭제가 완료되었습니다.");
        fetchList();
      })
      .catch((err) => console.log(err));
  };

  const filterMenuList = (list, type) => {
    let newList = [];
    if (list.length) {
      newList = list.filter((info) => info.type === type);
    }
    return newList;
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h1 className="page-header list">노트 리스트</h1>
      <MenuList infoList={filterMenuList(infoList, "menu")} />
      <p>서비스는 어때요</p>
      <MenuList infoList={filterMenuList(infoList, "service")} />
      {/* <ServiceList service={serviceList} /> */}
      <Review review={ReviewList} imgArr={imgArr} />
      {list.length ? (
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
                        onClick={() => updateForm(item._id)}
                      ></i>
                      <i
                        className="icon ion-md-trash"
                        onClick={() => deleteForm(item._id)}
                      ></i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty-content">
          <h3>등록된 학습노트가 없습니다.</h3>
        </div>
      )}
      <NavLink to={"/write"} className="create-button">
        <i className="ion-md-add"></i>
      </NavLink>
    </div>
  );
}

export default MainPage;
