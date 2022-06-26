import { getByDisplayValue } from '@testing-library/react'
import React, { Component } from 'react'

class App_Header extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           menu_arrow:true
        }
      }
      menu_arrow_click=()=>{
        this.state.menu_arrow ? (this.setState({menu_arrow:false})):this.setState({menu_arrow:true})
      }
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <div className="search_area">
                    <input type="text" value='Find books,mobiles and many more...'/>
                    <div className="search_img"></div>
                </div>
                <div className='arrow_img' onClick={()=>this.menu_arrow_click} style={{display:this.state.menu_arrow?('block'):'none'}} ></div>
                <div className="navbar" style={{flexFlow:'column',display:this.state.menu_arrow?("flex"):"flex"}}>
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
