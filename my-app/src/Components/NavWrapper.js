import React from "react";
import {NavLink, Route} from "react-router-dom";
import SubNav from "./SubNav";
import NavData from "../Data";

const NavWrapper = (props) => {
    const navLinks = NavData;

    return (
        <div className="navBar">
            <nav className="topNav">
                {navLinks.map((item) => {
                    if(item.name === "Apple Logo" || item.name === "Search" || item.name === "Shopping Cart"){
                        return <NavLink to={item.name} key={item.name} className="topNavLinks">
                        <img src={item.img} alt="apple logo"/></NavLink>
                    }else{
                        return <NavLink to={item.name} key={item.name} className="topNavLinks">
                        {item.name}</NavLink>
                    }
                })}
            </nav>
                {navLinks.map((item) => {
                    return <Route path={`/${item.name}`} key={item.name} render={(props) => {
                        return <SubNav {...props} subLinks={item.subLinks}/>
                    }}/>
                })}
        </div>
    );
}

export default NavWrapper; 