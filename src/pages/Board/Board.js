import { useState, useEffect } from "react";

import ToolBar from "../../components/ToolBar/ToolBar";
import Game from "../../components/Game/Game";
import Header from "../../components/Header/Header";
import './Board.scss'

import knight from '../../assets/Images/knight.png'
import viking from '../../assets/Images/viking.png'

function Board(){
    const [count, setCount] = useState(0)


    const characters = [
        {'id': 1, 'name': 'Alastor', health:100, 'attack': 15, 'url': knight},
        {'id': 2, 'name': 'Krieg', health:120, 'attack': 8, 'url': viking}
    ]
    function power() {
        if (count < 5) {
            console.log(count);
            setCount(count+1)
        } else {
            console.log(count);
        }
    }



    
    return (
        <div className="board">
            <Header/>
            <Game 
            player={characters[0].name} health={characters[0].health} attack={characters[0].attack} hero={characters[0].url}
            enemy= {characters[1].name} enemyHealth={characters[1].health} enemyAttack={characters[1].attack} enemyHero={characters[1].url}
            turns={count}
            power={power}
            />
            <ToolBar power={power} turns={count}/>
        </div>
    )
}
export default Board;