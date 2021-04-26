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
  const { scope1, scope2, scope3 } = review;
  const scopeSrc1 = getScopeSrc(scope1, imgArr);
  const scopeSrc2 = getScopeSrc(scope2, imgArr);
  const scopeSrc3 = getScopeSrc(scope3, imgArr);
  // let imgSrc = getScopeSrc(item.scope, imgArr);

  return (
    <div>
      <div>
        <p>국어</p>
        <img src={scopeSrc1} alt="" />
      </div>
      <div>
        <p>수학</p>
        <img src={scopeSrc2} alt="" />
      </div>
      <div>
        <p>영어</p>
        <img src={scopeSrc3} alt="" />
      </div>

      {/* {review.map((item, index) => {
        let imgSrc = getScopeSrc(item.scope, imgArr);
        return (
          <div key={item.type}>
            <p>{item.type}</p>
            <img src={imgSrc} alt="" />
          </div>
        );
      })} */}
    </div>
  );
}

export default Review;
