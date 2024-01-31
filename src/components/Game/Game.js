import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './Game.scss'
import './../Header/Header'

function Game({portrait,health, player, enemy, enemyHealth, enemyHero}){
    // const [playerHero, setPlayerHero] = useState(health, attack)
    // const [enemyhero, setEnemyHero] = useState(enemyHealth)
    // console.log(portrait)
    

    // const [p1, setP1] = useState({  player: p1.player, health: p1.health, attack: p1.attack, hero: p1.hero });
    // const [p2, setP2] = useState({ enemy: enemy, enemyHealth: enemyHealth, enemyHero: enemyHero  });
    // console.log(p1)



    // console.log('here is your hero atk: ', p1.attack)
    // console.log('here is your enemy hp: ', p2.enemyHealth)
    


    // function attackFunc(){
    //     if(turns < 5){
    //         console.log(p1,p2)
    //         const newHp = p2.enemyHealth - p1.attack;
    //         setP2({ ...p2, enemyHealth: newHp });
    //         turns += 1
    //     }else {
    //         console.log('you have no more power')
    //     }
    // }

    // function healFunc(){
    //     console.log(p1)
    //     const newHp = p1.health + 10;
    //     setP2({ ...p1, healthealth: newHp });
    //     power()
    // }
    


    return(
        <div className='game-container'>
            <div className='game'>
                    <div className='game-board__player'>
                        <div><p>{player}</p></div>
                        <div><p>{health}</p></div>
                        <div><img src={portrait}/></div>
                    </div>

                    <div className='game-board'>
                        hello
                    </div>

                    <div className='game-board__enemy' id='enemy1'>
                        {/*  onClick={attackFunc} this goes above */}
                        <div><p>{enemy}</p></div>
                        <div><p>{enemyHealth}</p></div>
                        <div><img src={enemyHero}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy2'>
                        {/*  onClick={attackFunc} this goes above */}
                        <div><p>{enemy}</p></div>
                        <div><p>{enemyHealth}</p></div>
                        <div><img src={enemyHero}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy3'>
                        {/*  onClick={attackFunc} this goes above */}
                        <div><p>{enemy}</p></div>
                        <div><p>{enemyHealth}</p></div>
                        <div><img src={enemyHero}/></div>
                    </div>
            </div>
        </div>
    )
}
export default Game;