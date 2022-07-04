import React from 'react'
import a from '../images/background.jpg'
import b from '../images/bck.jpg'
import c from '../images/bg.jpg'
import d from '../images/ckg.jpg'
import './sellhistory.css'

export const Sellhistory = () => {
    return(
        <div class="container-h">
          <img alt="back" src={a}/>
            <img alt="bck" src={b}/>
            <img alt="bg" src={c}/>
            <img alt="ckg" src={d}/>
        </div>
    )
}