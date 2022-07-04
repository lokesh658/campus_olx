
import React from "react";
import './sel-items.css';

const Sellitem=(props)=> {

    return(
        <div className="sellitems">
          <img className="sell-img" alt="ad" src={`https://robohash.org/${props.id}`}/>
          <div>
            <h2 className="sellitems_d">Price: {props.price}</h2>
            <p>{props.title}</p>
          </div>
        </div>
    )
}

export default Sellitem;