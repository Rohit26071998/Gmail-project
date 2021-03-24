import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Setting from '@material-ui/icons/Settings';
import Apps from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import logo from "./Images/logo.png";
import './Styles/header.css';
import { StateContext, useStateValue } from '../Context/StateProvider';
import { auth } from './Firebase';


function Header() {
    const [state, dispatch] = useStateValue(StateContext)

    const logOut =() =>{

        auth.signOut();

        dispatch({
            type:'SET_USER',
            user:null
        });
    }
    const[{user}, dispath] = useStateValue(StateContext);
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img src={logo} alt="logo" />
            </div>
            <div className="header_middle">
                <div className="header_middle_search">
                    <SearchIcon />
                    <input placeholder="Search mail" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header_right">
                <HelpOutline className="header_option" />
                <Setting className="header_option" />
                <Apps className="header_option" />
                <Avatar src={user.photoURL} onClick={logOut} />
            </div>
            
        </div>
    )
}

export default Header
