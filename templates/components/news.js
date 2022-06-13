import { MdDateRange,MdOutlineArrowRightAlt } from 'react-icons/md';

export default function News({ data }) {
  const { title, titleGradient, listItem } = data;
  return (
    <div className="news">
      <div className="container">
        <div className="news__heading">
          <h3 className="news__title">
            {title}
            <span className="title-gradient"> {titleGradient}</span>
          </h3>
          <div className="news__heading-more">
            <a href="#">Xem thêm</a>
          </div>
        </div>
        <div className="news__list">
          {listItem.map((item) => {
            const { id, title, imgUrl, linkItem, time, action } = item;
            return (
              <div className="news__item" key={id}>
                <a href={linkItem} className="news__item-img">
                  <img src={imgUrl} alt={title} />
                  <span className="news__item-action">
                    {`#${action}`}
                  </span>
                </a>
                <div className="news__item-content">
                  <h3 className="news__item-title">
                    <a href={linkItem}>{title}</a>
                  </h3>
                  <div className="news__item-meta">
                    <div className="news__item-time">
                      <i><MdDateRange/></i>
                      <span>{time}</span>
                    </div>
                    <div className="news__item-icon">
                      <i><MdOutlineArrowRightAlt/></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
