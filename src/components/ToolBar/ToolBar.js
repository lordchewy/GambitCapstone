import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';

import healthbar from '../../assets/Images/health.png'
import viking from '../../assets/Images/viking.png'
import ghost from '../../assets/Images/ghost.png'

import './ToolBar.scss'

function ToolBar({ count,player, 
    health,attack, portrait, enemyTurn,
    setCount}){
    const navigate = useNavigate()

    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});

    const [foe, setFoe] = useState([
        { name: 'Krieg', health: 60, attack: 8, url: viking, id: 1 },
        { name: 'banshee', health: 30, attack: 8, url: ghost, id: 2},
    ]);

    function attackFunc() {
        if (count <= 4) {
            // console.log(p1, foe[0]);
            console.log(count)
            const newHp = Number(foe[0].health) - Number(p1.attack);    
            if (newHp <= 0) {
                setFoe(prevFoe => prevFoe.slice(1));
            } else {
                setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
            }
            const specificFoeId = 0; // Replace this with the id of the specific foe you want to flash
            const specificFoeElement = document.getElementById(0);
            
            if (specificFoeElement) {
                specificFoeElement.classList.add('flash-red');
                setTimeout(() => {
                    specificFoeElement.classList.remove('flash-red');
                }, 200); // Flash duration in milliseconds
            }
        } else {
            console.log('you have no more power');
        }
        setCount(count + 1)
    }
    
    if (foe[0] === undefined){
        alert('you win!')
        navigate('/')
    }
    if (enemyTurn){
        p1.health -= 5
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
            foes={foe}
            // {[
            //     { name: foe[0]?.name || '', health: foe[0]?.health || '', url: foe[0]?.url || null },
            //     { name: foe[1]?.name || '', health: foe[1]?.health || '', url: foe[1]?.url || null},
            //     // { name: foe[2]?.name || '', health: foe[2]?.health || '', url: foe[2]?.url || '' }
            // ]}
            attackFunc={attackFunc}
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
                            <div className="card" id='a'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='5'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 3 && (
                            <div className="card" id='b'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='2'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 2 && (
                            <div className="card" id='c'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='3'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 1 && (
                            <div className="card" id='d'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='4'><span>attack </span></button>
                                </div>
                            </div>
                        )}

                    {count <= 0 && (
                            <div className="card" id='e'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar"></div>
                                    <button className="button" onClick={() => { attackFunc(); }} id='5'><span>attack </span></button>
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