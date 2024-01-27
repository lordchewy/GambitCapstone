import './Header.scss'

function Header(){
    return(
        <div className="header">
            <div className='header-bar'>
                <div>Hero stats</div>
                <div>Score</div>
                <div>enemy stats</div>
            </div>
            <div className='container'>
                <div className='water'></div>
            </div>
        </div>
    )
}
export default Header;