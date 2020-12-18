import React from 'react'

import Cart from './Cart'
import imgUrl from '../img/sherlock-holmes-147255_640.png'


function Header(){
    return(
        <div className="nav">
            <img src={imgUrl}></img>
            <Cart />
        </div>
        )
}

export default Header;