import MoviesList from './MoviesList';
import useFetch from './useFetch';
const Home = () => {
    let {data:movies,pending,error}=useFetch("http://localhost:4888/movies");
    

    // const deleteMovie = (recevedId)=>
    // {
    //     let newMovies = movies.filter((movie)=>{ return movie.id !== recevedId});
    //     setMovies(newMovies)
    // }
    return (
    <div className='home-content'>
    {error && <h1>{error}</h1>}
    {pending &&  <h1>Loading...</h1>}
    {movies && <MoviesList movies={movies} title="All movies" />} 
    
    </div>
    );
    // {movies && <MoviesList movies={movies} title="All movies" deleteMovie={deleteMovies}/>}
}
export default Home;