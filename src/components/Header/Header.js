import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from 'react';

import './Header.scss'


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
                <div className='header-bar__option'><Link to='/deck' className='link'> Cards</Link></div>
                <div className='header-bar__option'><Link to='/test' className='link'> Test</Link></div>             
                <div className='header-bar__option'>
                    {characterId ? (
                        // Render the Link if characterId is defined
                        <Link to={`/board/${characterId}`} className='link'>Start Game</Link>
                    ) : (
                        // If characterId is undefined, trigger an alert on clicking the link
                        <Link to="#" className='link' onClick={() => alert('Please pick a hero')}>Start Game</Link>
                    )}
                </div>


            </div>
        </div>
    )
}
export default Header;