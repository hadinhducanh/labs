import React from "react";
import { ListOfFilms } from "../data/ListOfFilms";

import "./film.css";

import { Link } from 'react-router-dom';


function Film  (){
  

  return (
    <div className="container">
      {ListOfFilms.map((film) => (
        <div className="card" key={film.id}> 
        <div className="skills">
              <Link to={`/detail/${film.id}`} class="link">Detail</Link>
            </div>
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
           
        </div>
      ))}
      
      
    </div>
    
  );
};

export default Film;


















  
