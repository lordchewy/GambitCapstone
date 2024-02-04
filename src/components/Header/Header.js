import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from 'react';

import './Header.scss'
import Alert from '../Alert/Alert';
import logo from '../../assets/Images/logo.png'

function Header({}){
    const { characterId } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
  
    const closeModal = () => {
        setIsOpen(false);
    };

    return(
        <div className="header">
            <div className='header-bar'>

                <div className='header-bar__option'><Link to='/' className='link'> Home</Link></div>
                
                <div className='header-bar__option'>
                <button onClick={openModal} className='modal-button'>Welcome to Gambit</button>
                <Alert isOpen={isOpen} onClose={closeModal} message="welcome to gambit pick a hero and let
                s start " />
                </div>
                
                <div className='header-bar__option'>
                <Link to={`/board/${characterId}`} className='link'>start game</Link>                </div>
            </div>
        </div>
    )
}
export default Header;