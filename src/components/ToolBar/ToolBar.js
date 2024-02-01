import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Game from '../Game/Game';

import healthbar from '../../assets/Images/health.png'
import viking from '../../assets/Images/viking.png'
import ghost from '../../assets/Images/ghost.png'
import dragon from '../../assets/Images/dragon.png'
import './ToolBar.scss'
import { Navigate } from 'react-router-dom';

function ToolBar({ count, cardPressed,player, health,attack, portrait}){
    const navigate = useNavigate()
    const characters = [
        {'name': 'Krieg', health:120, 'attack': 8, 'url': viking},
        {'name': 'banshee', health:100, 'attack': 8, 'url': ghost},
        {'name': 'dragon', health:300, 'attack': 8, 'url': dragon},

    ]

    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});
    const [p2, setP2] = useState({enemy: characters[0].name, enemyHealth: characters[0].health, enemyHero: viking})


    function attackFunc(){
        if(count < 5){
            console.log(p1,p2)
            const newHp = Number(p2.enemyHealth) - Number(p1.attack);
            setP2({ ...p2, enemyHealth: newHp });
            if(newHp <= 0){
            navigate('/')
            }
        }else {
            console.log('you have no more power')
        }
    }
    useEffect(() => {
    }, [attackFunc, p2]);



const playerTokens = []
    // Your loop to initialize tokens
    for (let i = 1; i <= 5 - count; i++) {
        playerTokens.push(<div key={i} className={`player token${i}`}></div>);
    }


    return(
        <>
        <Game
            portrait={p1.portrait} health={p1.health} player={p1.player}
            enemy= {p2.enemy} enemyHealth={p2.enemyHealth}  enemyHero={p2.enemyHero}
            count={count}
        />
        <div className='toolBar'>
            <div className='player'>
                <div className='player-turns'>turns
                    {playerTokens.map((token, index) => (
                        <div key={index} className={`player token${index + 1}`}></div>
                    ))}
                </div>
            <div className='player-turns'>
                <img src={healthbar} alt='turns' width='200px' />
            </div>
            </div>

            <div>
            <section className="new">
            <div className="container">
                        {count <= 4 && (
                            <div className="card" id='1'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { cardPressed(); attackFunc(); }} id='5'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 3 && (
                            <div className="card" id='2'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { cardPressed(); attackFunc(); }} id='2'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 2 && (
                            <div className="card" id='3'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { cardPressed(); attackFunc(); }} id='3'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 1 && (
                            <div className="card" id='4'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { cardPressed(); attackFunc(); }} id='4'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                    {count <= 0 && (
                            <div className="card" id='5'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { cardPressed(); attackFunc(); }} id='5'><span>attack </span></button>
                                </div>
                            </div>
                        )}  
            </div>
            </section> 
            </div>
        </div>
        </>
    )
}
export default ToolBar;