import React from 'react';
import "./film.css";
function FilmDetailModal ({ film, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{film.title}</h2>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FilmDetailModal;