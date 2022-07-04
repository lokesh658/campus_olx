import React from 'react'
import {useState,useContext} from 'react'
import { ItemContext } from '../Context'
import Sellitem from './sel-items'

function Itemlist() {
    const [items,setitems]=useContext(ItemContext)
  return (
    <div style={{display:'flex',flexFlow:'row wrap',margin:'40px calc(10%)',}}>{items.map((item)=>(
      <Sellitem price={items.price} title={items.title} id={items.id} key={items.id}/>
    ))}</div>
  )
}

export default Itemlist