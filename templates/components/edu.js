import { AiOutlinePauseCircle,AiFillPlayCircle } from 'react-icons/ai';
export default function edu({ data }) {
  const { title, subTitle, desc, videoUrl, linkBtn, listItem } = data;
  return (
    <div className="edu">
      <div className="edu__content">
        <div className="edu__sub-content">
          {listItem.map((item) => {
            const { id, title, bgUrl, bgColor } = item;
            return (
              <div
                className="edu__sub-content-item"
                style={{backgroundColor: bgColor }}
                key={id}
              >
                <a href={linkBtn} className="edu__content-link">
                  <h3 className="edu__sub-content-item-title">{title}</h3>
                  <div className="edu__sub-content-item-img">
                    <img src={bgUrl} alt={title} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <div className="edu__main-content">
          <a href={linkBtn} className="edu__content-link">
            <div className="edu__main-content-text">
              <h3 className="edu__main-content-title">{title}</h3>
              <h4 className="edu__main-content-sub-title">{subTitle}</h4>
              <div className="edu__main-content-desc"><p>{desc}</p></div>
              <div className="edu__main-content-btn btn">
                <i className = 'btn-pause'><AiOutlinePauseCircle/></i>
                <i className = 'btn-play'><AiFillPlayCircle/></i>
                <span>Pause video</span>
              </div>
            </div>
            <div className="edu__main-content-background">
              <video src={videoUrl} playsInline muted autoPlay loop></video>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
