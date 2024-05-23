import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import {enemyDefUp,enemyAttack} from '../../utils/cardUtils';
// import Alert from '../Alert/Alert';
import Modal from '../Modal/Modal';

import './Game.scss'
import './../Header/Header'
import world from '../../assets/Images/background5.png'
import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Game({
    hero,setHero,
    foes,setFoe,enemyAtk,enemyDef,
    inv,
    enemyTurn, setEnemyTurn,
    round, setRound})
    {
    const [foeTurn, setFoeTurns] = useState(0)

    useEffect(() => {
        if (enemyTurn === true) {
            let updatedHero = { ...hero }; // Create a copy of the hero state
            let x = 0;
    
            for (let i = 0; i < foes.length; i++) {
                const foe = foes[i];
                const id = foe.id;
    
                if (foeTurn % 2 === 1) {
                    enemyAttack(updatedHero,foe)
                } else {
                    enemyDefUp(foe, setFoe, foes, id);
                }
    
                x += 1;
            }
    
            // Update the hero's state after both enemies have completed their attacks
            setHero(updatedHero);
    
            // Reset enemy turn after all foes have completed their actions
            setTimeout(() => {
                setEnemyTurn(false);
            }, 1000 * foes.length); // Adjust timeout duration as needed
    
            console.log('enemy count: ', x);
            setFoeTurns(prev => prev + 1);
        }
    }, [enemyTurn]);
    
    
    console.log(foeTurn)
    return(
        <div className='game-container'>
            <div>
                <Modal text={inv.map((item)=> {return <li>{item }</li>})}/>
            </div>
            <img src={world} className='map'/>


            <div className='game'>
                    
                    <div className='game-board__player'>
                        <div className='game-board__player__health'>
                            <p>{hero.name}</p>
                            <p>{hero.health}</p>
                        </div>
                        <div className='game-board__player__stats'>
                            <p>{hero.defense}<img src={def} className='stat'/></p>
                            <p>{hero.attack}<img src={atk} className='stat'/></p>   
                        </div>
                        <div>
                            <img src={hero.portrait_url} className='playerImg'/>
                        </div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                            {/* {imgAttack && (
                                <img
                                    src={slash}
                                    alt="player attack"
                                    style={ImageStyle}
                                />
                            )}
                            {imgUlt && (
                                <img
                                    src={ult}
                                    alt="player ultimate"
                                    style={ImageStyle3}
                                    width='100%'
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
                            )} */}
                        </div>
                    </div>
                    
                {Object.entries(foes).map(([key, foe]) => {
    // Assuming foes is an object with enemy objects as values
                return (
                    <div className='game-board__enemy' key={key} id={key}>
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
                    })}
            </div>
            <div>
                {/* <Modal text={`Round: ${round}`}/> */}
            </div>
        </div>
    )
}
export default Game;