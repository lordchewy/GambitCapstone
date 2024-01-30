import {Link} from 'react-router-dom'

import './Header.scss'

function Header({}){
    return(
        <div className="header">
            <div className='header-bar'>
                <div className='header-bar__option'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='header-bar__option'>Score</div>
                <div className='header-bar__option'>
                    <Link to='/board/:heroId' >start game</Link>
                </div>
            </div>

        </div>
    )
}
export default Header;