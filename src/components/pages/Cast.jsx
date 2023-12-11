import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "components/service/FetchMovies";

export function Cast({params}){
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();
    const goBack = useNavigate();

    useEffect(()=>{
        api.FetchCastApi(movieId)
        .then(credits=>setCredits(credits.cast))
    },[movieId])
    return( 
    <>
    <button onClick={() => goBack(-1)}>Go Back</button>
    {credits &&
    <ul>
        {credits.map(credit=>
        <li key={params.credit.id}>
             <img
          src={`https://image.tmdb.org/t/p/w500${params.credit.profile_path}`}
          alt={`${params.credit.name}`}/>
          <p>{params.credit.name}</p>
          <p>Caracter: {params.credit.character}</p>
        </li>)}
    
    </ul>}
    </>
    )  
}