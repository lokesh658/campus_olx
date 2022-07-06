
import React from "react";
import { Link } from "react-router-dom";
import './sel-items.css';

const Sellitem=(props)=> {

    return(
        <Link to={`/user/${props.id}/${props.brand}/${props.title}/${props.description}/${props.price}/${props.category}`}>
           <div className="sellitems">
          <img className="sell-img" alt="ad" src={`https://robohash.org/${props.id}`}/>
          <div className="sell_item_prop">
            <h2 >Price: {props.price}</h2>
            <p>{props.title}</p>
          </div>
        </div>
        </Link>
    )
}

export default Sellitem;