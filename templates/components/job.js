import { MdArrowRightAlt } from "react-icons/md";

export default function Job({ data }) {
  const {
    title,
    subTitle,
    desc,
    quantity,
    slogan,
    subSlogan,
    listBoxText,
    listImg,
  } = data;
  return (
    <div className="job">
      <div className="container">
        <div className="job__content">
          <div className="job__content-slogan">
            <span>{subSlogan}</span>
            {`${slogan}?`}
          </div>
          <div className="job__list-item">
            {listBoxText.map((item) => {
              const {
                id,
                bgColor,
                title,
                zIndex,
                transform,
                width,
                bottom,
                right,
                minHeight,
              } = item;
              return (
                <div
                  className={`job__item job__item-${id}`}
                  key={id}
                  style={{
                    backgroundColor: bgColor,
                    zIndex: zIndex,
                    transform: transform,
                    maxWidth: width,
                    height:
                      minHeight && minHeight !== "undefine" ? minHeight : width,
                    bottom: bottom,
                    right: right,
                  }}
                >
                  <div className="job__item-title">{title}</div>
                </div>
              );
            })}
            {listImg.map((item) => {
              const { id, imgUrl, zIndex, transform, width, bottom, right } =
                item;
              return (
                <div
                  className= {`job__item job__img job__img-${id}`}
                  key={id}
                  style={{
                    zIndex: zIndex,
                    transform: transform,
                    maxWidth: width,
                    maxHeight: width,
                    bottom: bottom,
                    right: right,
                  }}
                >
                  <div className="job__img">
                    <img src={imgUrl}></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="job__linked">
          <div className="job__linked-sub-title">{subTitle}</div>
          <h4 className="job__linked-title">{title}</h4>
          <div className="job__linked-link">
            <a href="#">
              <span>{quantity}+</span>
              {desc}
              <i>
                <MdArrowRightAlt />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
