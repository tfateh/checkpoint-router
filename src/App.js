import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewMovie from './component/AddNewMovie';
import { Data } from './component/Data';
import Header from './component/Header';
import ListOfMovies from './component/ListOfMovies';

import CommentCard from './component/CommentCart';
import MovieDetails from './component/MovieDetails';

function App() {
  const [movie,setmovie]= useState (Data)
  const addnew=(x)=>{
    return setmovie([...movie,x])
  }
  const filterMovies=(searchText,rating)=>{
    setmovie(movie.filter(el=> el.rate>=rating && el.title.toLowerCase().includes(searchText.toLowerCase())))
  }
  return (
    <div>
      <Header filterMovies={filterMovies} />,
      <Routes>
      <Route path="/" element={ <> <ListOfMovies movies={movie} /> </>  } />
      <Route path="/addnewmovie" element={ <> <AddNewMovie addnew={addnew} /></>  } />
      <Route path="/contactUs" element={ <>  <div> <h1> contact-us page </h1>  </div> </>  } />
      <Route path="/movie/:movieId/" element={ <MovieDetails/>  } />
      <Route path="/movie/:movieId/:commentId" element={ <CommentCard /> } />
      <Route path="*" element={ <h1> 404 3ammar : (  </h1> } />
      </Routes>
      
    </div>
  );
}

export default App;