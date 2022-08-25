import {useState} from 'react';
import {useHistory} from 'react-router-dom'
//usehistroy is used to programming redirects to some different page after adding the data


const CreateMovies = () => {

    const [movieName, setMovieName] = useState("");
    const [hero, setHero] = useState("");
    const [heroine, setHeroine] = useState("");
    const [gener, setGener] = useState(""); 
    const [rating, setRating] = useState("");
    const [story, setStory] = useState("");

    let history = useHistory();

    const handelSubmit = (e)=>{
        e.preventDefault();//stop auto default refreshing

        let movie = {movieName,hero,heroine,gener,rating,story};

        console.log(movie);


        fetch("http://localhost:4888/movies" , {
            method:"POST",                  //process
            headers:{"Content-Type" : "application/json"} , //type of the data
            body: JSON.stringify(movie),//why data-------to convert in this line all data in string format
        }).then(()=>{      //data has been added so it is resolved "then"conditin will word 
            //history.go(-1);//-1 is previous page it will go
            //or
            history.push("/")
        })
    }

    return (
        <div className="add-movies">

    <form className="create-movie" onSubmit={handelSubmit}>

    <label>Movie Name : </label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>


    <label>Hero : </label> <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}} />

    <label>Heroine : </label> <input type="text" value={heroine} onChange={(e)=>{setHeroine(e.target.value)}} />

    <label>Gener : </label> <input type="text" value={gener} onChange={(e)=>{setGener(e.target.value)}} />

    <label>Rating : </label> <input type="number" min="1" max="5"step="0.1" value={rating} onChange={(e)=>{setRating(e.target.value)}} />

    <label>Story : </label> <textarea cols="50" rows="5" value={story} onChange={(e)=>{setStory(e.target.value)}}></textarea>

    <input type="submit" />

    </form>
            
        </div>
    );
}
export default CreateMovies;