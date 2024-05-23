import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Select from '../Select/Select';

import './Header.scss'


function Header({selecter,setSelecter}){
    const { characterId } = useParams();
    return(
        <div className="header">
            <div className='header-bar'>
                <div className='header-bar__option'><Link to='/' className='link'> Home</Link></div>
                <div className='header-bar__option'><Link to='/deck' className='link'> Cards</Link></div>           
                <button className='header-bar__option'onClick={()=> setSelecter(!selecter)}>Start</button>
            </div>
        </div>
    )
}
export default Header;