import {Link} from 'react-router-dom'

import './Header.scss'

function Header(){
    return(
        <div className="header">
            <div className='header-bar'>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>Score</div>
                <div>
                    <Link to='/board'>Start game</Link>
                </div>
            </div>
            <div className='container'>

                {/* <div className='water'></div> */}
            </div>
        </div>
    )
}
export default Header;