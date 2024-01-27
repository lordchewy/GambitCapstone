import './Game.scss'

import Board from '../../assets/Images/background2.jpg'
import knight from '../../assets/Images/knight.png'
import viking from '../../assets/Images/viking.png'
import sorcerer from '../../assets/Images/sorcerer.png'





function Game(){
    const characters = [
        {'id': 1, 'name': 'Alastor', health:100, 'attack': 15, 'url': knight},
        {'id': 2, 'name': 'Krieg', 'health':120, 'attack': 8, 'url': viking}
    ]
    console.log(characters[0].url)
    console.log(characters[0].name)
    console.log(characters[0].health)


    return(
        <div className='game-container'>
            <div className='game'>
                    <div className='game-board player'>
                        <div><p>{characters[0].name}</p></div>
                        <div><p>{characters[0].health}</p></div>
                        <div><img src={characters[0].url}/></div>
                    </div>



                    <div className='game-board'>
                        hello
                    </div>



                    <div className='game-board enemy'>
                    <div><p>{characters[1].name}</p></div>
                        <div><p>{characters[1].health}</p></div>
                        <div><img src={characters[1].url}/></div>
                    </div>
            </div>
        </div>
    )
}
export default Game;