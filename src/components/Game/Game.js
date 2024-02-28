import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';



import './Game.scss'
import './../Header/Header'
import slash from '../../assets/Images/alastorslash.png'
import skewer from '../../assets/Images/border.png'
import heal from '../../assets/Images/heal.png'
import world from '../../assets/Images/cityview.png'

import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Game({portrait,health, player,playerAttack, playerDefense,
    setP1Health,
    foes,enemyAtk,enemyDef,
    imgVisible,imgHeal,
    enemyTurn, setEnemyTurn})
    {
    const ImageStyle = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'slideToLeft 10s linear forwards'} 


    const self = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '500px',
    marginTop: '600px',
    marginLeft: '-600px'}  

    const ImageStyle2 = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '500px',
    marginTop: '600px',
    marginLeft: '-200px',
    transform: 'scaleX(-1)',} 

    // const [currHealth, setCurrHealth] = useState(health)
    const [enemyAttack, setEnemyAttack] = useState(false)
    // console.log(health)
    // console.log(enemyAtk)
    console.log(typeof playerDefense)

    // function Number({ n }) {
    //     const { number } = useSpring({
    //         from: { number: 0 },
    //         number: n || 0, // Ensure n is a number or default to 
    //         delay: 200,
    //         config: { mass: 1, tension: 20, friction: 10 },
    //     });
    
    //     return <animated.div>{number.to((n) => (typeof n === 'number' ? n.toFixed(0) : ''))}</animated.div>;
    // }

    useEffect(() => {
        if (enemyTurn === true) {
            foes.forEach((foe) => {
                const newHealth = Number(health) + Number(playerDefense) - foe.attack;
                setTimeout(() => {
                    setEnemyAttack(false)
                }, 200);
                setP1Health(newHealth);
                setEnemyAttack(true)
                setEnemyTurn(false);

            });
        }
    }, [enemyTurn]);








    return(
        
        <div className='game-container'>
            <img src={world} className='map'/>
            <div className='game'>
                    


                    <div className='game-board__player'>
                        <div className='game-board__player__health'>
                            <p>{player}</p>
                            <p>{health}</p>
                        </div>
                        <div className='game-board__player__stats'>
                            <p>{playerDefense}<img src={def} className='stat'/></p>
                            <p>{playerAttack}<img src={atk} className='stat'/></p>   
                        </div>
                        <div>
                            <img src={portrait} className='playerImg'/>
                        </div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                            {imgVisible && (
                                <img
                                    src={slash}
                                    alt="player attack"
                                    style={ImageStyle}
                                />
                            )}
                            {enemyAttack && (
                                <img
                                    src={skewer}
                                    alt="enemy attack"
                                    style={ImageStyle2}
                                />
                            )}
                            {imgHeal && (
                                <img
                                    src={heal}
                                    alt="heal"
                                    style={self}
                                />
                            )}
                        </div>
                    </div>
                    
                    {foes.map((foe, index) => {
                    if (foe) { // Replace 'foe.condition' with your actual condition
                        return (
                            <div className='game-board__enemy' key={index} id={index}>
                                <div className='game-board__player__health'>
                                    <p>{foe.name}</p>
                                    <p>{foe.health}</p>
                                </div>
                                <div className='game-board__player__stats'>
                                    <p>{enemyDef}<img src={def} className='stat'/></p>
                                    <p>{enemyAtk}<img src={atk} className='stat'/></p>   
                                </div>  
                                    <div><img src={foe.url} alt={foe.name} className='enemyImg'/></div>
                                </div>
                        );
                    }
                    return null; // If condition is false, return null or nothing
                })}
            </div>
        </div>
    )
}
export default Game;