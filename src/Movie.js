import { Link } from "react-router-dom";
import {useState , useEffect} from 'react';
const Movie=(props)=>{

    const [like,setLike]=useState(false);
    const clickHandler=()=>{
        setLike(prev=>!prev);
    }
    useEffect(()=>{
        if(like){
            let likedMovies=[];
            if('likedMovies' in localStorage) likedMovies=JSON.parse(localStorage.getItem('likedMovies'));
            likedMovies.push({id:props.id,image:props.image,title:props.title});
            localStorage.setItem('likedMovies',JSON.stringify(likedMovies));
        }
        },[like])
    
    return(
        <div key={props.id} id={props.id}>
            <Link to={`/${props.id}`}><img src={props.image} /></Link>
            <span>{props.title}</span>
            <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--star-border-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.510l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.810.45-2.348-.785-2.446zm-10.726 8.890l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>    
        </div>
    )
}
export default Movie;