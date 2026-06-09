import React from 'react';
import {useDispatch} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'
import { openModal } from '../../actions/modalAction';
import Login from '../Login';


const Header = () => {
  const dispatch = useDispatch()

  const openModalHandle = () => {
   dispatch(openModal("open", "Login"))
  };
  return (
    <div className='header'>
      <img
        src="https://s.yimg.com/zb/imgv1/26347c9d-9458-3369-b5a8-d946c1771358/t_500x300"
        className="header_logo"
        alt="logo"
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <span onClick={openModalHandle}>Log in</span>
        <Avatar />
      </div>
    </div>
  );
};
  

export default Header