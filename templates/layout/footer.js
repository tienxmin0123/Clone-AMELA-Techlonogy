import Slider from "react-slick";

import { TbBuildingSkyscraper } from "react-icons/tb";
import { BsPhoneVibrate } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function footer({ data }) {
  const { copyright, security, listAddress, listSocial, about } = data;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="container">
          <Slider {...settings}>
            {listSocial.map((item) => {
              const { id, title, link, imgUrl } = item;
              return (
                <div className="footer__social-item" key={id}>
                  <a href={link} className="footer__social-item-link">
                    <img src={imgUrl} alt={title} />
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            <div className="footer__location">
              {listAddress.map((item, idx) => {
                const { id, title, imgUrl, location } = item;
                return (
                  <div className="footer__location-item" key={id}>
                    <div className="footer__location-img">
                      <img src={imgUrl} alt={title}></img>
                    </div>
                    <div className="footer__location-main">
                      <div className="footer__location-title">{title}</div>
                      <div className="footer__location-body">
                        {location.map((item) => {
                          const { id, map, phone, mail } = item;
                          return (
                            <div className="footer__location-info" key={id}>
                              <div className="footer__location-child">
                                <i className="footer__location-icon">
                                  <TbBuildingSkyscraper />
                                </i>
                                <span className="footer__location-text">
                                  {map}
                                </span>
                              </div>
                              <div className="footer__location-child">
                                <i className="footer__location-icon">
                                  <BsPhoneVibrate />
                                </i>
                                <span className="footer__location-text">
                                  {phone}
                                </span>
                              </div>
                              <div className="footer__location-child">
                                <i className="footer__location-icon">
                                  <FiMail />
                                </i>
                                <span className="footer__location-text">
                                  {mail}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="footer__content-right">
              <div className="footer__content-about-amela">
                <div className="footer__content-about-amela-title">
                  {about.title}
                </div>
                <div className="footer__content-about-amela-list">
                  <div className="footer__content-about-amela-child">
                    {about.listPage.map((item, idx) => {
                      const { id, title, link } = item;
                      return idx < Math.trunc(about.listPage.length / 2) ? (
                        <div
                          className="footer__content-about-amela-item"
                          key={idx}
                        >
                          <a href={link}>{title}</a>
                        </div>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                  <div className="footer__content-about-amela-child">
                    {about.listPage.map((item, idx) => {
                      const { id, title, link } = item;
                      return idx > Math.trunc(about.listPage.length / 2) ? (
                        <div
                          className="footer__content-about-amela-item"
                          key={idx}
                        >
                          <a href={link}>{title}</a>
                        </div>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer__content-security">
                {security.map((item) => {
                  const { id, title, link } = item;
                  return (
                    <div className="footer__content-security-item" key={id}>
                      <a href={link} className="footer__content-security-link">
                        {title}
                      </a>
                    </div>
                  );
                })}
                <div className="footer__content-copyright">{copyright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
