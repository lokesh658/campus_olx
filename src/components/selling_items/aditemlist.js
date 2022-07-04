import React from "react";
import Sellitem from "./sel-items";
import './itemlist.css'

const Additemlist=({aditem})=>{

    const Items=aditem.map( (items,i)=>{
        return  <Sellitem key={i} 
        id={aditem[i].id} 
        amount={aditem[i].amount}
        product_name={aditem[i].name} 
        date={aditem[i].date}
        />
    })

    return(
        <div className="container-add">
            {
            aditem.map( (items,i)=>{
        return  <Sellitem key={i} 
        id={aditem[i].id} 
        amount={aditem[i].amount}
        product_name={aditem[i].name} 
        date={aditem[i].date}
        />
         })
          }
        </div>
    )
}

export default Additemlist;