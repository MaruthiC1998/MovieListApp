import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'


const Navbar = () => {
    let history=useHistory();
    let [search , setSearch] = useState("");
    let handleSearch=()=>{
        fetch(` http://localhost:4888/movies`)
        .then((res)=>{
            return res.json();
        })
        .then((movies)=>{
            for(let i=0; i<movies.length;i++)
            {
                // if(movies[i].movieName.includes(search))
                if(movies[i].movieName.toUpperCase().includes(search.toUpperCase()))
                // if(movies[i].movieName===search)
                {
                    const id=movies[i].id;
                    history.push(`/movie${id}`)
                }
            }
        })
    }
    return ( 
        <nav>
            <div className='nav1'>
            <h1>Netflix</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add New Movies</Link>
            </div>
            </div>
            <div className='nav2'>
                <input type="Search" value={search}
                onChange={(e)=>{setSearch(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>

            </div>
        
        </nav>
     );
}
 
export default Navbar;