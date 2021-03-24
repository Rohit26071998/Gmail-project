import React from 'react'
import "./Styles/sidebar.css"
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import InboxIcon from '@material-ui/icons/Inbox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import StarIcon from '@material-ui/icons/Star';
import SentIcon from '@material-ui/icons/Send';
import DraftICon from '@material-ui/icons/Drafts';
import CategoryIcon from '@material-ui/icons/Category';
import DeleteIcon from '@material-ui/icons/Delete';
import VideoIcon from '@material-ui/icons/Videocam'
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { StateContext, useStateValue } from '../Context/StateProvider';


function Sidebar() {
    const[{user}, dispatch] = useStateValue(StateContext);

    return (
        <div className="sidebar">
            <div className="sidebar_compose_btn">
                {/* <img scr={Compose} alt="plus-logo" /> */}
                <span>Compose</span>
            </div>
            <div className="sidebar_options">
                <div className="options options_active">
                    <Link to="/" exact>
                        <InboxIcon />
                        <span>Inbox</span>
                    </Link>
                </div>
                <div className="options">
                    <StarIcon />
                    <span>Starred</span>
                </div>
                <div className="options">
                    <WatchLaterIcon />
                    <span>Snoozed</span>
                </div>
                <div className="options">
                    <LabelImportantIcon />
                    <span>Important</span>
                </div>
                <div className="options">
                    <Link to="/sent" exact>
                        <SentIcon />
                        <span>Sent</span>
                    </Link>
                </div>
                <div className="options">
                    <DraftICon />
                    <span>Draft</span>
                </div>

                <div className="options">
                    <CategoryIcon />
                    <span>Categories</span>
                </div>
                <div className="options">
                    <DeleteIcon />
                    <span>Bin</span>
                </div>
            </div>
            <div className="sidebar_options">
                <h4>Meet</h4>
                <div className="options">
                    <VideoIcon />
                    <span>New Meeting</span>
                </div>
                <div className="options">
                    <KeyboardIcon />
                    <span>Join Meeting</span>
                </div>
            </div>
            <div className="sidebar_options">
                <h4>Hangouts</h4>
                <div className="hangouts_options">
                    <div className="hangouts_options_left">
                        <Avatar src={user.photoURL} />
                        <span>{user.displayName} </span>
                        <ArrowDropDownIcon />
                    </div>
                    <div className="hangouts_options_right">
                        <AddIcon />
                    </div>
                </div>
                <div className="hangouts_options">
                    <div className="hangouts_options_left">
                        <Avatar />
                        <span>Pankaj Masiwal </span>
                        <ArrowDropDownIcon />
                    </div>

                </div>
                <div className="hangouts_options">
                    <div className="hangouts_options_left">
                        <Avatar />
                        <span>Navonil Das </span>
                        <ArrowDropDownIcon />
                    </div>

                </div>
                <div className="hangouts_options">
                    <div className="hangouts_options_left">
                        <Avatar />
                        <span>Suraj Joshi </span>
                        <ArrowDropDownIcon />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
