import { useState } from 'react'
import './App.css'
import { Header } from './Header';
import Icon from '@mdi/react';
import { mdiMinusCircle } from '@mdi/js';
import {ShowButton} from './ShowButton'


const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  }
];
function App() {

  return (
   <>
   <Header/>
   <div className="Body">
    <Movies Data={tempMovieData} />
    <MoviesList />
   </div>
    
   </>
  )
}

export default App
function Movies({Data}){
  const [isOpen,setIsOpen]=useState(false);
  return(
  <div className="movies-list">
   
    <ShowButton isOpen={isOpen} setIsOpen={setIsOpen} />
    {isOpen&&(

    Data.map(film=><Film Title={film.Title} Poster={film.Poster} Year={film.Year} key={film.imdbID}/>)
  )}
  </div>
  )
}
function MoviesList(){
  const [isOpen,setIsOpen]=useState(false);
  return(
    <div className="movies-list">
      <div className="movies-list-stats">
    <div className="movies-list-header">
      <h2>MOVIES YOU WATCHED</h2>
      <ShowButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    {isOpen&&(
    <div className="movies-summary">
      <span>🎬 2 movies</span>
      <span>⭐️ 8.65</span>
      <span>🌟 9.5</span>
      <span>⏱ 132 min</span>
    </div>
    )}
    </div>
  </div>
  )
}
function Film({Title,Poster,Year}){
  return(
<div className="Film">
  <img src={Poster} alt="" />
  <div className="FilmDet">
    <p>{Title}</p>
    <p>{Year}</p>
  </div>
</div>
  )
}
