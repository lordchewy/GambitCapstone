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
            number: n || 0, // Ensure n is a number or default to 0
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
    
        return <animated.div>{number.to((n) => (typeof n === 'number' ? n.toFixed(0) : ''))}</animated.div>;
    }



        function RedBar({ width }) {
            const { barWidth } = useSpring({
                from: { barWidth:'0%'},
                to: { barWidth:  width },
                delay: 2000,
                config: { mass: 1, tension: 120, friction: 14 },
            });

        
            return (
                <div style={{ width: '100%', height: '20px', backgroundColor: 'black', borderRadius: '4px', overflow: 'hidden' }}>
                    <animated.div
                        style={{
                            width: barWidth,
                            height: '100%',
                            backgroundColor: 'red',
                            borderRadius: '4px',
                        }}
                    />
                </div>
            );
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
                        <div className='game-board__enemy' key={index}>  
                            <div><p>{foe.name}</p></div>
                            <div><p><Number n={foe.health}/></p></div>
                            {console.log(foe.health)}
                            <div><RedBar width={'100%'}/><img src={foe.url}/></div>
                        </div>
                    ))}

            </div>
        </div>
    )
}
export default Game;