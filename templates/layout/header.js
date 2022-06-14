import { TbWorld } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';

import { useEffect } from "react";

export default function Header({ data }) {
  const { imgUrl, animation, listItem, languages } = data;
  useEffect(() => {
    const header = document.querySelector('.header')
    const nav = document.querySelector('.header__nav')
    const btnList = header.querySelector('.header__logo-list');
    const btnClose = header.querySelector('.header__logo-close');

    btnList.addEventListener('click', () => {
      btnList.classList.remove('active');
      btnClose.classList.add('active');
      nav.classList.add('active');
    })
    btnClose.addEventListener('click', () => {
      btnList.classList.add('active');
      btnClose.classList.remove('active');
      nav.classList.remove('active');
    })
  }, [])
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img src={imgUrl} alt="logo header" />
              <div className="header__logo-animation">
                {animation.map((item) => {
                  const { id, height, status } = item;
                  return (
                    <div
                      className={`header__logo-animation-${status}`}
                      style={{ height: height }}
                      key={id}
                    ></div>
                  );
                })}
              </div>
            </a>
          </div>
          <div className="header__nav">
            <ul className="header__list-link">
              {listItem.map((item) => {
                const { id, title, linkItem } = item;
                return (
                  <li key={id}>
                    <a
                      href={linkItem}
                      className={`header__links-item 
                    `}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="header__languages">
              {languages.map((item) => {
                const { id, imgUrl, listLanguage, title, linkItem } = item;
                return title && title === "japan" ? (
                  <a
                    key={id}
                    href={linkItem}
                    className={`header__links-item ${title}`}
                  >
                    <div className="header__links-item-img">
                      <img src={imgUrl} alt={title} />
                    </div>
                    {title}
                  </a>
                ) : (
                  <li className="header__languages-item" key={id}>
                    <span>
                      <i>
                        <TbWorld />
                      </i>
                      {title}
                      <i>
                        <RiArrowDownSLine />
                      </i>
                    </span>
                    <div className="header__list-language">
                      {listLanguage.map((language, idx) => {
                        return (
                          <div className="header__language-item" key={idx}>
                            {language}
                          </div>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="header__logo-icon">
            <div className="header__logo-list active">
              <i>
                <BsList />
              </i>
            </div>
            <div className="header__logo-close">
              <i>
                <AiOutlineClose />
              </i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
