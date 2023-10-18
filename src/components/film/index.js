import React, { useState } from "react";
import { ListOfFilms } from "../data/ListOfFilms";
import "./film.css";
import "./FilmDetailModal";
import FilmDetailModal from "./FilmDetailModal";

function Film  (){
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  function handleOpenModal (film) {
    setSelectedFilm(film);
    setShowDetailModal(true);
  };

  function handleCloseModal  ()  {
    setShowDetailModal(false);
  };

  return (
    <div className="container">
      {ListOfFilms.map((film) => (
        <div className="card" key={film.id}> 
          <div className="item">
            <div className="avatarImg">
              <img src={film.image} alt={film.image} />
            </div>
            
          </div>
          <div className="advisor" >
              <div className="profile">
                <span className="name">{film.title}</span>
                <div className='year'>
                  <span className="info">{film.year}</span>
                </div>
                
              </div>
            </div>
            
          <div>
            <div className="skills">
              <button onClick={() => handleOpenModal(film)}>Detail</button>
              
            </div>
          </div>
          
          
       
        
         
        </div>
      ))}
      {showDetailModal && (
        <FilmDetailModal film={selectedFilm} onClose={handleCloseModal} />
      )}
      
    </div>
  );
};

export default Film;


















  
