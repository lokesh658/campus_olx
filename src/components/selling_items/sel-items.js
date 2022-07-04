
import React from "react";
import './sel-items.css'

function Sellitem ({id,amount,product_name,date}) {

    return(
        <div className="sellitems">
          <img className="sell-img" alt="ad" src={`https://robohash.org/${id}`}/>
          <div>
            <h2>Price: {amount}</h2>
            <p>{product_name} ; {date}</p>
          </div>
        </div>
    )
}

export default Sellitem;