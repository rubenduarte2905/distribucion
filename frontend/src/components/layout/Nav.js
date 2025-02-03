import React from 'react';
import '../../styles/components/layout/Nav.css';
import {NavLink} from "react-router-dom";



const Nav = (props)=>{
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="./" className={({isActive})=>isActive?"activo":undefined}>Inicio</NavLink></li>
                    <li><NavLink to="./compras" className={({isActive})=>isActive?"activo":undefined}>Compras</NavLink></li>
                    <li><NavLink to="./distribucion" className={({isActive})=>isActive?"activo":undefined}>Distribución</NavLink></li>
                    <li><NavLink to="./contacto" className={({isActive})=>isActive?"activo":undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav; 



