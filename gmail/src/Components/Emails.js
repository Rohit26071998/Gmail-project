import React from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'

function Emails() {
    return (
        <div className="emails">
            <div className="emails_left">
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <span>Rohit Kumar</span>
            </div>
            <div className="emails_middle">
                <span>Hello world</span>
            </div>
            <div className="emails_right">
                22 march 2021 12:41:54 GMT
            </div>
        </div>
    )
}

export default Emails
