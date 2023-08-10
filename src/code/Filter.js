import {useState} from 'react';
const Filter=(props)=>{

    const [year,setYear]=useState(0);
    const changeHandler=(e)=>{
        setYear(e.target.value);
    }
    const clickHandler=()=>{
        props.year(year);
    }
    return (
        <div>
            <input className='search_filter' type='number' placeholder='filter by year' onChange={changeHandler}/>
            <button className='button' onClick={clickHandler}>Apply Filter</button>
        </div>
    );
}
export default Filter;