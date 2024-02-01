import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';



import './Game.scss'
import './../Header/Header'

function Game({portrait,health, player, 
    foe,foeHp, foeIcon,
    foe1,foe1Hp, foe1Icon,
    foe2,foe2Hp, foe2Icon,
    foes,
    attackFunc
    }){

        function Number({n}){
            const {number } = useSpring({
                from: {number: 0},
                number: n,
                delay:200,
                config: {mass:1, tension:20, friction:10},
            });
            return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
        }



        function RedBar({ width }) {
            const { barWidth } = useSpring({
                from: { barWidth:'0%'},
                to: { barWidth:  width },
                delay: 200,
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
                    

                    <div className='game-board__enemy' id='enemy1'>

                        <div><p>{foe}</p></div>
                        <div><p><Number n={foeHp}/></p></div>
                        <div><RedBar width={'100%'}/><img src={foeIcon}/></div>
                    </div>

                    {/* <div className='game-board__enemy' id='enemy2'>
                      
                        <div><p>{foe1}</p></div>
                        <div><p>{foe1Hp}</p></div>
                        <div><img src={foe1Icon}/></div>
                    </div>

                    <div className='game-board__enemy' id='enemy3'>
                       
                        <div><p>{foe2}</p></div>
                        <div><p>{foe2Hp}</p></div>
                        <div><img src={foe2Icon}/></div>
                    </div> */}
            </div>
        </div>
    )
}
export default Game;