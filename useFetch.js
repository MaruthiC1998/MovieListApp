import { useState , useEffect } from 'react';

const useFetch = (request) => {

    let [data , setdata] =  useState(null);
    let [pending,setpending] = useState(true);
    let [error,seterror] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
        fetch(request)
        .then((response)=>{ 
            console.log(response);
            if (response.ok==false)
            {
                throw Error("Data is not Found, please search for movies Instead")
            }
            return response.json() })
        .then((data)=>{
            setdata(data);
            setpending(false);
        })
        .catch((error)=>{ console.log(error);
            seterror(error.message);
            setpending(false);
        })
    },3000);
}, []);

    return {data,pending,error} ;
}
 
export default useFetch;