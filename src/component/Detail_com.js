function Detail_com({
  title,
  poster,
  scr_im1,
  scr_im2,
  scr_im3,
  genres,
  rating,
  runtime,
  description,
  year,
}) {
  return (
    <section className="detail">
      <div className="detail_box">
        <div className="detail_data">
          <img className="poster" src={poster} alt={title} title={title} />
          <div className="detail_intro">
            <h3>{title}</h3>
            <span className="year">{year}</span>
            <span className="runtime">{runtime}m</span>
            <h4 className="rating">⭐{rating} / 10</h4>
            <ul className="genres">
              {genres && genres.map((gen, index) => <li key={index}>{gen}</li>)}
            </ul>
            <p className="description">{description}</p>
          </div>
        </div>
        <ul className="detail_scrsht">
          <li>
            <img src={poster} alt={title} title={title} />
          </li>
          <li>
            <img src={scr_im1} alt={title} title={title} />
          </li>
          <li>
            <img src={scr_im2} alt={title} title={title} />
          </li>
          <li>
            <img src={scr_im3} alt={title} title={title} />
          </li>
        </ul>
        <div className="detail_description"></div>
      </div>
    </section>
  );
}
export default Detail_com;
