import React from "react";
import { useState,createContext } from "react";

export const ItemContext=createContext()

export const ItemProvider=(props)=>{
    const items=[
        {
            id:'0',
            brand:'tesla',
            category:'books',
            title:'React',
            discription:'this is the book for react ',
            price:'500'
        },
        {
            id:'1',
            brand:'tata',
            category:'books',
            title:'Angular',
            discription:'this is the book for angular ',
            price:'400'
        },
        {
            id:'2',
            brand:'tesla',
            category:'books',
            title:'React',
            discription:'this is the book for react ',
            price:'500'
        },
        {
            id:'3',
            brand:'tata',
            category:'books',
            title:'Angular',
            discription:'this is the book for angular ',
            price:'400'
        },
        {
            id:'4',
            brand:'tesla',
            category:'books',
            title:'React',
            discription:'this is the book for react ',
            price:'500'
        },
        {
            id:'5',
            brand:'tata',
            category:'books',
            title:'Angular',
            discription:'this is the book for angular ',
            price:'400'
        },
        {
            id:'6',
            brand:'tesla',
            category:'books',
            title:'React',
            discription:'this is the book for react ',
            price:'500'
        },
        {
            id:'7',
            brand:'tata',
            category:'books',
            title:'Angular',
            discription:'this is the book for angular ',
            price:'400'
        },
        {
            id:'8',
            brand:'tesla',
            category:'books',
            title:'React',
            discription:'this is the book for react ',
            price:'500'
        },
        {
            id:'9',
            brand:'tata',
            category:'books',
            title:'Angular',
            discription:'this is the book for angular ',
            price:'400'
        }

    ]
    const [item_state, setitem_state] = useState(items)
    return(
        <ItemContext.Provider value={[item_state,setitem_state]}>
            {props.children}
        </ItemContext.Provider>
    )
}