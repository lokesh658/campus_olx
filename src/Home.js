import React from 'react'
import AppHeader from './components/App_Header'
import { Routes,Route } from 'react-router-dom';
import {Home_page} from './components/Home_page.js';
import { Edit } from './components/editview';
import {Buyhistory} from './components/buyhistory';
import {Sellhistory} from './components/sellhistory';

function Home (){
    return (
      <div>
        <AppHeader/>
        <Routes>
          <Route path='/' element={<Home_page/>}></Route>
          <Route path='/editview' element={<Edit/>}></Route>
          <Route path='/buyhistory' element={<Buyhistory/>}></Route>
          <Route path='/sellhistory' element={<Sellhistory/>}></Route>
        </Routes>
      </div>
    )
}

export default Home;
