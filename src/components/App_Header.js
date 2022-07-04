import './App_Header.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as Logo } from './icons/olx_logo.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as User } from './icons/profile.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as Search} from './icons/search.svg';
import { ReactComponent as Edit_symbol} from './icons/edit.svg';
import { ReactComponent as Buy_symbol} from './icons/buy.svg';
import { ReactComponent as Sell_symbol} from './icons/sell.svg';
import { ReactComponent as Bars} from './icons/bars.svg';
import { Link, Navigate } from "react-router-dom";
import React, { useState,useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler'; //run ->  npm i react-outside-click-handler


function AppHeader() {

  return (
    <Navbar>
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<User/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {

  const [mobile,setMobile]=useState(false);


  return (
    <nav>
      <div className="navbar">
      <div className="logo" > <Link className="a" to='/user'> <Logo /> </Link></div>
      <div className='search'>
        <input placeholder='Search'></input>
        <button><Search/></button></div>
      <OutsideClickHandler
      onOutsideClick={()=>{setMobile(false);}} >
      <div  className={mobile?"navbar-nav-mobile":"navbar-nav"}>{props.children}
        <Link to='/user/sell'><div className='sell'><PlusIcon/><h1>Sell</h1></div></Link>
      </div>   
      <button  className="nav-btn" onClick={()=>setMobile(!mobile)}>
                <Bars/>
      </button> 
      </OutsideClickHandler>
      </div>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
    < OutsideClickHandler
      onOutsideClick={()=>{setOpen(false);}}  >
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children }
    </OutsideClickHandler>
    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a className="menu-item" >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
        <div className="menu">
        <Link className="a" to='/user/editview'><DropdownItem leftIcon={<Edit_symbol/>}>View and Edit profile</DropdownItem></Link>
        <Link className="a" to='/user/buyhistory'> <DropdownItem
            leftIcon={<Buy_symbol/>}> Buying history </DropdownItem></Link>
        <Link className="a" to='/user/sellhistory'> <DropdownItem
            leftIcon={<Sell_symbol/>}> Selling history </DropdownItem></Link>
        </div>    
    </div>
  );
}

export default AppHeader;