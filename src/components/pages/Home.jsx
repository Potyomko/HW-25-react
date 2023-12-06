import { NavLink, useLoaderData, useNavigate} from "react-router-dom";

export function Home() {
    const movies = useLoaderData();
    return (
        <div className="thumb">
            <h2>Trending today</h2>
            <h4>Movies list</h4>
            {movies && <ul className="moviesList">
                {movies.map(({id, title, author})=>(
                <li key={id}> 
                    <NavLink to={`/books/${id}`}>{id} - {title} - {author}</NavLink>
                </li>
                ))}
            </ul>}        
        </div>
    )
}