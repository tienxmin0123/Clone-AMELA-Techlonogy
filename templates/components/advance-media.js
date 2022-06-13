import React, { Fragment } from "react";
import { MdArrowRightAlt } from 'react-icons/md';
export default function AdvanceMedia({ data }) {
  return (
    <div className="advance-media">
      <div className="advance-media__list">
        {data.map((item) => {
          const {
            id,
            type,
            title,
            link,
            partners,
            statistics,
            imgUrl,
            background,
            listDesc,
          } = item;
          return (
            <div
              className="advance-media__item"
              style={{ background: `linear-gradient${background}` }}
              key={id}
            >
              {type === "another" ? (
                <div className="advance-media__content">
                  <div className="advance-media__brand">
                    {title.split(" ").map((text, idx) => (
                      <div className="advance-media__brand-title" key={idx}>
                        {text === "Advanced" ? (
                          <>
                            <span>{text.slice(0, 1)}</span>
                            {text.slice(2)}
                          </>
                        ) : (
                          <>
                            <span>{text.slice(0, 2)}</span>
                            {text.slice(2)}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="advance-media__statistics">
                    {statistics.map((item) => {
                      const { id, quantity, content } = item;
                      return (
                        <div
                          className="advance-media__statistics-item"
                          key={id}
                        >
                          <div className="advance-media__statistics-item-quantity">
                            {quantity}+
                          </div>
                          <div className="advance-media__statistics-item-content">
                            {content}
                          </div>
                        </div>
                      );
                    })}
                    <div className="advance-media__statistics-partner">
                      {partners.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <img src={item}></img>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="advance-media__link">
                      <a href="#">
                        {link}{" "}
                        <i>
                          <MdArrowRightAlt />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="advance-media__content">
                  <h3 className="advance-media__brand-title">{title}</h3>
                  <div className="advance-media__brand-desc">
                    {listDesc.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <p>{item}</p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
              <div className="advance-media__background">
                <img src={imgUrl} alt={title}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
