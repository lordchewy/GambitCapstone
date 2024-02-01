import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './Game.scss'
import './../Header/Header'

function Game({portrait,health, player, enemy, enemyHealth, enemyHero}){


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

                    {/* <div className='game-board__enemy' id='enemy2'>
                      
                        <div><p>{enemy}</p></div>
                        <div><p>{enemyHealth}</p></div>
                        <div><img src={enemyHero}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy3'>
                       
                        <div><p>{enemy}</p></div>
                        <div><p>{enemyHealth}</p></div>
                        <div><img src={enemyHero}/></div>
                    </div> */}
            </div>
        </div>
    )
}
export default Game;