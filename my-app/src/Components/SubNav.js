import React from "react";
import {NavLink} from "react-router-dom";

const SubNav = (props) => {
    return (
        <div className="subNav">
                {props.subLinks.map((item) => {
                    return <NavLink to={`/${item.name}`} 
                        key={item.name}
                        className="subNavItems">{item.name} 
                        <img src={item.img} alt=""/>
                    </NavLink>;
                })}
        </div>
    )
}

export default SubNav; 