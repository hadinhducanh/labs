import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfFilms } from '../data/ListOfFilms';
import "./film.css";
import { Link } from "react-router-dom";

function FilmDetail() {
  const { filmId } = useParams();
  const film = ListOfFilms.find((f) => f.id === parseInt(filmId));
  return (
    <div className="detail">
      <h2>{film.title}</h2>
      <p>Year: {film.year}</p>
      <p>Nation: {film.nation}</p>
      <p>{film.trailer}</p>
      <Link to={`/`} className="home">Home</Link>
    </div>
  );
}

export default FilmDetail;