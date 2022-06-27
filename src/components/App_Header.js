import { getByDisplayValue } from '@testing-library/react'
import React, { Component } from 'react'

class App_Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <div className="search_area">
                    <input type="text" value='Find books,mobiles and many more...'/>
                    <div className="search_img"></div>
                </div>
                <div className="navbar">
                    <ul>
                    <li><div className="chat_icon"></div></li>
                    <li><div className="notify_icon"></div></li>
                    <li><div className="profile_name"></div></li>
                    <li><div className="sell_button"><button>Sell</button></div></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App_Header
