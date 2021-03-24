import React from 'react'
import Header from './Header'
import Inbox from './Inbox'
import Sidebar from './Sidebar'

function Homescreen() {
    return (
        <>
        <Header />
        <div className="mail_body" >
            <Sidebar />
            < Inbox />
        </div>
        </>
    )
}

export default Homescreen
