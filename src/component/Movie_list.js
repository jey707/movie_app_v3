import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Movie_list.css";
import PropTypes from "prop-types";

const innerWidth = window.innerWidth;

function Movie_list({ id, runtime, year, poster, title, summary, genres }) {
  console.log(innerWidth);
  const getGener = (summary) => {
    console.log(innerWidth);
    console.log(summary);
    if (innerWidth > 1100 && innerWidth < 1200) {
      return summary.slice(0, 125) + "...";
    } else if (innerWidth > 950 && innerWidth < 1100) {
      return summary.slice(0, 80) + "...";
    } else if (summary.length > 185) {
      return summary.slice(0, 185) + "...";
    }
  };
  return (
    <div className="movie_box">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3>{title}</h3>
        <span className="year">{year}</span>
        <span className="runtime">{runtime}m</span>
        <ul>
          {genres.map((gen, index) => (
            <li key={index}>{gen}</li>
          ))}
        </ul>
        {/* <p>{summary.length > 220 ? summary.slice(0, 220) + "..." : summary}</p> */}
        <p>{getGener(summary)}</p>
      </div>
    </div>
  );
}

Movie_list.propTypes = {
  id: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie_list;
