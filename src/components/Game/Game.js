import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './Game.scss'
import './../Header/Header'

function Game({portrait,health, player, 
    foe,foeHp, foeIcon,
    foe1,foe1Hp, foe1Icon,
    foe2,foe2Hp, foe2Icon,
    }){

        console.log(foe,foeHp, foeIcon)
    
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

                        <div><p>{foe}</p></div>
                        <div><p>{foeHp}</p></div>
                        <div><img src={foeIcon}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy2'>
                      
                        <div><p>{foe1}</p></div>
                        <div><p>{foe1Hp}</p></div>
                        <div><img src={foe1Icon}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy3'>
                       
                        <div><p>{foe2}</p></div>
                        <div><p>{foe2Hp}</p></div>
                        <div><img src={foe2Icon}/></div>
                    </div>
            </div>
        </div>
    )
}
export default Game;