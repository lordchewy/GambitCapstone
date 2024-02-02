import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

import './Header.scss'

function Header({}){
    const { characterId } = useParams();
    return(
        <div className="header">
            <div className='header-bar'>
                <div className='header-bar__option'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='header-bar__option'>Welcome to Gambit!</div>
                <div className='header-bar__option'>
                <Link to={`/board/${characterId}`}>start game</Link>                </div>
            </div>
        </div>
    )
}
export default Header;