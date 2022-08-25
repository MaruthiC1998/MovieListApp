import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const MovieDetails = () => {

    const {id} = useParams();
    let {data:movie , pending ,error} = useFetch(`http://localhost:4888/movies/${id}`);
    let history = useHistory();
    let handleDelete=(id)=>{
        fetch(` http://localhost:4888/movies/${id}`,{method:"DELETE"})
        .then(()=>{
            alert("Movie has been Deleted");
            history.push("/");
        })
    }
    
    return ( 
        <div>
            {error && <h1>{error}</h1>}

            {pending && <h1>Loading ..........</h1>}

            {movie && 
            <div className="movie-details">
                <img src={movie.poster}/>
                <h1>{movie.movieName}</h1>
                <h2>Hero : {movie.hero}</h2>
                <h2>Heroine : {movie.heroine}</h2>
                <h2>Gener : {movie.gener}</h2>
                <h2>IMBD rating : {movie.rating}</h2>
                <p>Story line : {movie.story}</p>

                <button onClick={()=>{handleDelete(movie.id)}}>DELETE</button>
            </div>
            }
        </div>
    );
}
export default MovieDetails;