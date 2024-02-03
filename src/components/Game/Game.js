import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';



import './Game.scss'
import './../Header/Header'

function Game({portrait,health, player, 
    foes,
    }){
    console.log(foes)

    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n || 0, // Ensure n is a number or default to 
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
    
        return <animated.div>{number.to((n) => (typeof n === 'number' ? n.toFixed(0) : ''))}</animated.div>;
    }


    return(
        
        <div className='game-container'>
            <div className='game'>
                    <div className='game-board__player'>
                        <div><p>{player}</p></div>
                        <div><p>{health}</p></div>
                        <div><img src={portrait}/></div>
                    </div>

                    <div className='game-board'>
                    
                    </div>
                    
                    {foes.map((foe, index) => (
                        <div className='game-board__enemy' key={index} id={index}>  
                            <div><p>{foe.name}</p></div>
                            <div><p><Number n={foe.health}/></p></div>
                            {console.log(foe.health)}
                            <div><img src={foe.url}/></div>
                            {/* <RedBar width={'100%'}/> */}
                        </div>
                    ))}

            </div>
        </div>
    )
}
export default Game;