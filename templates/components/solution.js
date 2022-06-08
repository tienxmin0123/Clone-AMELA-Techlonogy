export default function Solution({ data }) {
  const { componentName, title, titleGradient, listItem } = data;
  return (
    <div
      className={`${
        componentName === "solution" ? "" : componentName
      } solution`}
    >
      <div className="container">
        <h2 className="solution__title">
          {title}
          <span className="solution__title-gradient">{titleGradient}</span>
        </h2>
        <div className="solution__list">
          {listItem.map((item) => {
            const { id, title, imgUrl, desc, marginTop ,listUrlImgLanguages,imgUrlBackground } = item;
            return componentName === "solution" ? (
              <div
                className="solution__item"
                key={id}
                style={{ marginTop: marginTop }}
              >
                <div className="solution__item-number">{`0${id}`}</div>
                <h3 className="solution__item-title">{title}</h3>
                <div className="solution__item-img">
                  <img src={imgUrl} alt={title}></img>
                </div>
                <p className="solution__item-desc">{desc}</p>
              </div>
            ) : (
              <div className="solution__item" key={id} style = {{backgroundImage: `url(${imgUrlBackground})`}}>
                <h3 className="solution__item-title">{title} <span>
                {title.split(" ")[0]}</span></h3>
                <div className="solution__item-list-language">
                  {listUrlImgLanguages.map((item, idx) => {
                    return (
                      <div className="solution__item-language" key={idx}>
                        <img src={item}></img>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
