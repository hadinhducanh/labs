import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfFilms } from '../data/ListOfFilms';

function FilmDetail() {
  const { filmId } = useParams();
  const film = ListOfFilms.find((f) => f.id === parseInt(filmId));
  return (
    <div>
      <h2>{film.title}</h2>
      <p>Year: {film.year}</p>
      <p>Nation: {film.nation}</p>
      <p>{film.trailer}</p>
      <a href="/">Back</a>
    </div>
  );
}

export default FilmDetail;