import "./Search.css";
import { useState } from "react";
import profileImage from "../../images/profile.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { actions } from "../../store/index";

const Search = (props) => {
  const searchText=useSelector(state=>state.searchText);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const changeHandler = (e) => {
    dispatch(actions.setSearchText(e.target.value));
  };
  const clickHandler = () => {
    props.moviesSearch(searchText);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Do something when Enter key is pressed
      props.moviesSearch(searchText);
    }
  };
  const logoutHandler = async () => {
    try {
      dispatch(actions.changeCurrentUser("reset"));
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="nav_bar">
      <h3 className="movies-heading">Movies</h3>
      <input
        class="search"
        type="text"
        placeholder="Search movies"
        onChange={changeHandler}
        onKeyUp={handleKeyPress}
        value={searchText}
      />
      <svg
        class="search_button"
        onClick={clickHandler}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
      {isLoggedIn&&<Link to="/profile">
        <img
          className="navbar-profile"
          src={profileImage}
          alt="profile photo"
        />
      </Link>}
      {isLoggedIn&&<button className="logout-button" onClick={logoutHandler}>Logout</button>}
      {!isLoggedIn&&<Link to='/login'><button className="signin-button">SignIn</button></Link>}
      
    </div>
  );
};
export default Search;
