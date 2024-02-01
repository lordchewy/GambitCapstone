import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Game from '../Game/Game';

import healthbar from '../../assets/Images/health.png'
import viking from '../../assets/Images/viking.png'
import ghost from '../../assets/Images/ghost.png'
import dragon from '../../assets/Images/dragon.png'
import './ToolBar.scss'

function ToolBar({ count, cardPressed,player, health,attack, portrait}){
    const navigate = useNavigate()

    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});

    const [foe, setFoe] = useState([
        { name: 'Krieg', health: 30, attack: 8, url: viking },
        { name: 'banshee', health: 30, attack: 8, url: ghost },
        { name: 'dragon', health: 30, attack: 8, url: dragon },
    ]);
    
    
    function attackFunc() {
        if (count < 5) {
            console.log(p1, foe[0]);
            const newHp = Number(foe[0].health) - Number(p1.attack);
            
            if (newHp <= 0) {
                setFoe(prevFoe => prevFoe.slice(1));
            } else {
                setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
            }
        } else {
            console.log('you have no more power');
        }
    }


    useEffect(() => {
    }, [attackFunc, foe[0]]);

    if (foe[0] === undefined){
        alert('you win!')
        navigate('/')
    }

    const playerTokens = []
        // Your loop to initialize tokens
        for (let i = 1; i <= 5 - count; i++) {
            playerTokens.push(<div key={i} className={`player token${i}`}></div>);
        }


    return(
        <>
        <Game
            portrait={p1.portrait}
            health={p1.health}
            player={p1.player}
            attackFunc={attackFunc}

            // foes={[
            //     { name: foe[0]?.name || '', health: foe[0]?.health || '', url: foe[0]?.url || '' },
            //     { name: foe[1]?.name || '', health: foe[1]?.health || '', url: foe[1]?.url || '' },
            //     { name: foe[2]?.name || '', health: foe[2]?.health || '', url: foe[2]?.url || '' }
            // ]}


            foe={foe[0] ? foe[0].name : ''}
            foeHp={foe[0] ? foe[0].health : ''}
            foeIcon={foe[0] ? foe[0].url : ''}
            foe1={foe[1] ? foe[1].name : ''}
            foe1Hp={foe[1] ? foe[1].health : ''}
            foe1Icon={foe[1] ? foe[1].url : ''}
            foe2={foe[2] ? foe[2].name : ''}
            foe2Hp={foe[2] ? foe[2].health : ''}
            foe2Icon={foe[2] ? foe[2].url : ''}
            count={count}
        />

        <div className='toolBar'>
            <div className='player'>
                <div className='player-turns'>turnsS
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