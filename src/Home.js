import React, { Component } from 'react'
import App_Header from './components/App_Header'
import Footer from './components/Footer'

export class Home extends Component {
  render() {
    return (
      <div>
        <App_Header/>
        <Footer/>
      </div>
    )
  }
}

export default Home