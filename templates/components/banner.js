export default function Banner({ data }) {
  const { title, desc, urlVideoBackground } = data;
  return (
    <div className="banner">
      <video src={urlVideoBackground} playsInline muted autoPlay loop className="banner__background"></video>
      <div className="container">
        <div className="banner__content">
          <h1 className="banner__title">{title}</h1>
          <p className="banner__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}
