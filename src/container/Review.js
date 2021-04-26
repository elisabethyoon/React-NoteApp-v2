import React from "react";
import { list } from "postcss";

const getScopeSrc = (scope, imgArrList) => {
  let imgSrc = "";
  let newObj = imgArrList.find((info) => info.scope === scope);
  if (newObj) {
    imgSrc = newObj.src;
  }
  return imgSrc;

  // let newObj = null;
  // list.forEach(info => {
  // 	newObj = imgArrList.find(item => item.scope === info.scope)
  // })

  // return newObj.src;
};
function Review(props) {
  const { review, imgArr } = props;
  return (
    <div>
      {review.map((item, index) => {
        let imgSrc = getScopeSrc(item.scope, imgArr);
        return (
          <div key={item.type}>
            <p>{item.type}</p>
            <img src={imgSrc} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Review;
