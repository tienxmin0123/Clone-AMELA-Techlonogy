export default function Solution({data}){
  const {title,titleGradient,listItem} = data
  return (
    <div className="solution">
      <div className="container">
        <h2 className="solution__title">
          {title}
          <span className="solution__title-gradient">
            {titleGradient}
          </span>
        </h2>
        <div className="solution__list">
          {listItem.map((item => {
            const {id,title,imgUrl,desc,marginTop} = item
            return (
              <div className="solution__item" key ={id} style={{ marginTop: marginTop }}>
                <div className="solution__item-number">
                  {`0${id}`}
                </div>
                <h3 className="solution__item-title">
                  {title}
                </h3>
                <div className="solution__item-img">
                  <img src={imgUrl} alt={title} ></img>
                </div>
                <p className="solution__item-desc">
                  {desc}
                </p>
              </div>
            )
          }))}
        </div>
      </div>
    </div>
  )
}