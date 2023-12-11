import {useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import api from "components/service/FetchMovies";

export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const goBack = useNavigate();
    useEffect(()=>{
        api.FetchReviewsApi(movieId)
        .then(reviews=>setReviews(reviews.results))
    },[movieId])
console.log(reviews);
    return <>
          <button onClick={() => goBack(-1)}>Go back</button>
{reviews.length >=1 ? 
<ul>
    {reviews.map(review=>
        <li key={review.id}>
        <h3>Author:{review.author}</h3>
    <p>{review.content}</p>
        </li>)}
</ul>
: <p>We dont have any reviews for this movie</p>}
    </>;
}