import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'
import { openModal } from '../../actions/modalAction';
//import Login from '../Login';
import { logout } from '../../actions/userActions';



const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const openModalHandle = () => {
   dispatch(openModal("open", "login"))
  };
  const openRegisterModal = () => {
  dispatch(openModal("open", "register"));
};
  const logoutHandler = () => {
  dispatch(logout());
};



  return (
    <div className='header'>
      <img
        src="https://s.yimg.com/zb/imgv1/26347c9d-9458-3369-b5a8-d946c1771358/t_500x300"
        className="header_logo"
        alt="logo"
      />

      {/* Search Bar */}
      <div className="home_search">
        <div className="search_box">
          <div>
            <h4>Where</h4>
            <p>Search destinations</p>
          </div>

          <div>
            <h4>When</h4>
            <p>Add dates</p>
          </div>


          <div>
            <h4>Guests</h4>
            <p>Add guests</p>
          </div>

          <button className="search_btn">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
        <ExpandMoreIcon className='dropbtn' />
        <div className='dropdown-content'>
         {userInfo ? (
  <>
    <span>
      Welcome, {userInfo?.user?.name || userInfo?.name}
    </span>

    <span onClick={logoutHandler}>
      Log out
    </span>
  </>
) : (
  <>
    <span onClick={openRegisterModal}>
      Sign up
    </span>

    <span onClick={openModalHandle}>
      Log in
    </span>
  </>
)}
        
           <span>Help</span>
        </div>
        </div>
       <Avatar />
      </div>
    </div>
  );
};
  

export default Header