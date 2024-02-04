import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';

import healthbar from '../../assets/Images/health.png'
import viking from '../../assets/Images/viking.png'
import ghost from '../../assets/Images/ghost.png'

import './ToolBar.scss'

function ToolBar({ count,player, 
    health,attack, portrait,
    setCount}){
    const navigate = useNavigate()

    const [imgVisible, setImgVisible] = useState(false);
    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});

    const [foe, setFoe] = useState([
        { name: 'Krieg', health: 60, attack: 8, url: viking, id: 1 },
        { name: 'banshee', health: 30, attack: 8, url: ghost, id: 2},
    ]);

    function attackFunc() {
        // if (count <= 4) {
            console.log(count);
            const newHp = Number(foe[0].health) - Number(p1.attack);
            if (newHp <= 0) {
                setFoe(prevFoe => prevFoe.slice(1));
            } else {
                setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
            }

            const specificFoeElement = document.getElementById(0);
            if (specificFoeElement) {
                setImgVisible(true); // Set the state to display the img
                specificFoeElement.classList.add('flash');
                setTimeout(() => {
                    specificFoeElement.classList.remove('flash');
                    setImgVisible(false); // Set the state to hide the img
                }, 200);
            }
        // } 
        setCount(count + 1);
    }
    
    useEffect(() => {
        if (foe[0] === undefined){
            alert('you win!');
            navigate('/');
        }
    }, [foe, navigate]);
    

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
            attackFunc={attackFunc}
            imgVisible={imgVisible}
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