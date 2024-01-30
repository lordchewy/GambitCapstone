import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './Game.scss'
import './../Header/Header'

function Game({player, health,attack, hero, enemy, enemyHealth,enemyHero,power,turns}){
    // const [playerHero, setPlayerHero] = useState(health, attack)
    // const [enemyhero, setEnemyHero] = useState(enemyHealth)

    const [p1, setP1] = useState({  player: player, health: health, attack: attack, hero:hero });
    const [p2, setP2] = useState({ enemy: enemy, enemyHealth: enemyHealth, enemyHero: enemyHero  });


    // console.log('here is your hero atk: ', p1.attack)
    // console.log('here is your enemy hp: ', p2.enemyHealth)
    


    function attackFunc(){
        if(turns < 5){
            console.log(p1,p2)
            const newHp = p2.enemyHealth - p1.attack;
            setP2({ ...p2, enemyHealth: newHp });
            power()
        }else {
            alert('you have no more power')
        }
    }

    function healFunc(){
        console.log(p1)
        const newHp = p1.health + 10;
        setP2({ ...p1, healthealth: newHp });
        power()
    }
    


    return(
        <div className='game-container'>
            <div className='game'>
                    <div className='game-board__player'>
                        <div><p>{p1.player}</p></div>
                        <div><p>{p1.health}</p></div>
                        <div><img src={p1.hero}/></div>
                    </div>

                    <div className='game-board'>
                        hello
                    </div>

                    <div className='game-board__enemy' onClick={attackFunc}>
                    <div><p>{p2.enemy}</p></div>
                        <div><p>{p2.enemyHealth}</p></div>
                        <div><img src={p2.enemyHero}/></div>
                    </div>
            </div>
        </div>
    )
}
export default Game;