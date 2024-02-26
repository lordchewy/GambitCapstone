import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';



import './Game.scss'
import './../Header/Header'
import slash from '../../assets/Images/slash.png'
import heal from '../../assets/Images/heal.png'
import world from '../../assets/Images/background5.png'

import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Game({portrait,health,setPlayerHealth, player, 
    foes,imgVisible,imgHeal,
    enemyTurn, setEnemyTurn, playerAttack}){
    const ImageStyle = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '500px',
    marginTop: '600px',
    marginLeft: '580px',} 

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


    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n || 0, // Ensure n is a number or default to 
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
    
        return <animated.div>{number.to((n) => (typeof n === 'number' ? n.toFixed(0) : ''))}</animated.div>;
    }

    useEffect(() => {
        if (enemyTurn === true) {
            foes.forEach((foe) => {
                setPlayerHealth(prevHealth => prevHealth - 10)
                setTimeout(() => {
                    setEnemyAttack(false)
                }, 200);
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
                            <p>{health}<img src={def} className='stat'/></p>
                            <p>{playerAttack}<img src={atk} className='stat'/></p>   
                        </div>
                        <div>
                            <img src={portrait} className='playerImg'/>
                        </div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                            {/* <img src={slash}/> */}
                            {imgVisible && (
                                <img
                                    src={slash}
                                    alt="player attack"
                                    style={ImageStyle}
                                />
                            )}
                            {enemyAttack && (
                                <img
                                    src={slash}
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
                                <div><p>{foe.name}</p></div>
                                <div><p><Number n={foe.health}/></p></div>
                                <div><img src={foe.url} alt={foe.name} className='playerImg'/></div>
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