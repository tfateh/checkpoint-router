import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { Data } from './Data';

function MovieDetails() {
    const {movieId}=useParams()
    const [first, setfirst] = useState('');
    const navigate = useNavigate();
    const myMovie=Data.find(el=>el.id==movieId)
  return (
  <div>
       <input style={{margin:10,width:50}} type='text' placeholder='ok' onChange={(e)=>{setfirst(e.target.value)}} />
          <button onClick={(e)=>{e.preventDefault()
            first==='ok' && navigate('/')}} >back to the home page ?</button>
      <h1> movie title : {myMovie.title} </h1>
      <p> movie description : {myMovie.description}  </p>
      <div style={{display:"flex",justifyContent:"center"}} >
      <iframe width={800} height={400} src={myMovie.trailer} >

      </iframe>
      </div>

  </div>);
}

export default MovieDetails;