import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Sent from './Sent'
function SentScreen() {
    return (
        <>
          <Header /> 
          <div className="mail_body">
          <Sidebar />
          <Sent />
          </div> 
        </>
    )
}

export default SentScreen
