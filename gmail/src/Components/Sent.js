import React from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RefreshIcon from '@material-ui/icons/Refresh'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Emails from './Emails'
import "./Styles/inbox.css"

function Sent() {
    return (
        <div className="inbox">
        <div className="mail_body_header">
            <div className="left_icon">
                <div className="check_box">
                    <CheckBoxOutlineBlankIcon />
                    <ArrowDropDownIcon />
                </div>
                <RefreshIcon />
                <MoreVertIcon />
            </div>
            <div className="right_icon">
                <span>1-50 12,21</span>
                <ChevronLeftIcon />
                <ChevronRightIcon />
            </div>
        </div>
       
        <Emails />
        <Emails />
        <Emails />
        <Emails />

    </div>
    )
}

export default Sent
