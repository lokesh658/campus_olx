//jshint esversion:6

import React from 'react'
import {useState,useContext} from 'react'
import { ItemContext } from '../Context'
import AppHeader from './App_Header'
import Sellitem from './sel-items'
import { Items } from '../Context'

function Itemlist() {
    const [items,setitems]=useContext(ItemContext)
    const [range,setrange]=useState({lower:'',upper:''})
    const filter_item=(item_category)=>{
      const result=Items.filter((cur_data)=>{
        return cur_data.category===item_category
      })
      setitems(result)
    }
    const filter_range=(lower,upper)=>{
      const range_result=Items.filter((item_cat)=>{
        return (item_cat.price>lower)&(item_cat.price<=upper)
      })
      setitems(range_result)
    }
  return (
    <div style={{display:'flex',flexFlow:'row wrap',margin:'40px calc(10%)',}}>
      <div className="filter_list">
        Fiter Items
        <ul>
          <li><button onClick={()=>filter_item('Book')}>Books</button></li>
          <li><button onClick={()=>filter_item('Electronics')}>Electronics</button></li>
          <li><button onClick={()=>filter_item('Cycle')}>Cycles</button></li>
          <li><button onClick={()=>filter_item('Fashion')}>Fashion</button></li>
          <li><button onClick={()=>filter_item('Sports')}>Sports</button></li>
        </ul>
        Filter Range
        <ul>
          <li><button onClick={()=>filter_range(0,200)}>below 200</button></li>
          <li><button onClick={()=>filter_range(200,400)}>200-400</button></li>
          <li><button onClick={()=>filter_range(400,600)}>400-600</button></li>
          <li><button onClick={()=>filter_range(600,800)}>600-800</button></li>
          <li><button onClick={()=>filter_range(800,100000)}>above 800</button></li>
        </ul>
        
      </div>
      <div>
      {items.map((item)=>(
      <Sellitem price={item.price} title={item.title} id={item.id} key={item.id} brand={item.brand} description={item.description} category={item.category}/>
      ))}
      </div>
    </div>
  )
}

export default Itemlist