import './Game.scss'

import Board from '../../assets/Images/emptyboard.png'
import knight from '../../assets/Images/knight.png'
import viking from '../../assets/Images/viking.png'
import sorcerer from '../../assets/Images/sorcerer.png'



function Game(){
    return(
        <div className='game'>
            <div className='game-party'>
                <img src={sorcerer} alt='game board' className="game-party__hero"/>
                <img src={knight} alt='game board'className="game-party__hero"/>
                <img src={viking} alt='game board'className="game-party__hero"/>
            </div>

            <img src={Board} alt='game board' className="game-board"/>
        </div>
    )
}
export default Game;