import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';



import './Game.scss'
import './../Header/Header'
import slash from '../../assets/Images/slash.png'

function Game({portrait,health, player, 
    foes,imgVisible,
    enemyTurn, setEnemyTurn}){
    console.log('here is the heal',)

    const ImageStyle = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '500px',
    marginTop: '600px',
    marginLeft: '580px',} 

    const ImageStyle2 = {display: 'block',
    position: 'absolute',
    zIndex: 999,
    width: '500px',
    marginTop: '600px',
    marginLeft: '-200px',
    transform: 'scaleX(-1)',} 

    const [currHealth, setCurrHealth] = useState(health)
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
                setCurrHealth(prevHealth => prevHealth - 10);
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
            <div className='game'>
                    <div className='game-board__player'>
                        <div><p>{player}</p></div>
                        <div><p>{currHealth}</p></div>
                        <div><img src={portrait}/></div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                            {/* <img src={slash}/> */}
                            {imgVisible && (
                                <img
                                    src={slash}
                                    alt="Your Image"
                                    style={ImageStyle}
                                />
                            )}
                            {enemyAttack && (
                                <img
                                    src={slash}
                                    alt="Your Image"
                                    style={ImageStyle2}
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
                                <div><img src={foe.url} alt={foe.name} /></div>
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