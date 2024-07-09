import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import Modal from '../Modal/Modal';
import { attackFunc, ultimateFunc, healFunc,draw, attackAll, attackUp,defenseUp } from '../../utils/cardUtils';

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
    const [enemyMove, setEnemyMove] = useState(false)

    useEffect(() => {
        if (enemyTurn === true) {
            let x = 0;
    
            for (let i = 0; i < foes.length; i++) {
                const foe = foes[i];
                const id = foe.id;
    
                if (foeTurn % 2 === 1) {
                    attackFunc(hero[0],foe, setHero);
                    setEnemyMove(true)
                } else {
                    defenseUp(foe, setFoe);
                }
    
                x += 1;
            }    
            // Reset enemy turn after all foes have completed their actions
            setTimeout(() => {
                setEnemyTurn(false);
            }, 1000 * foes.length); // Adjust timeout duration as needed
            console.log('enemy count: ', x);
            setFoeTurns(prev => prev + 1);
        }
    }, [enemyTurn]);

    
    // console.log(foeTurn)
    return(
        <div className='game-container'>
            <div>
                <Modal text={inv.map((item)=> {return <li>{item }</li>})}/>
            </div>
            <img src={world} className='map'/>


            <div className='game'>
                    
                    <div className='game-board__player'>
                        
                        <div className='game-board__player__health'>
                            <p>{hero[0].name}</p>
                            <p>{hero[0].health}</p>
                        </div>
                        <div className='game-board__player__stats'>
                            <p>{hero[0].defense}<img src={def} className='stat'/></p>
                            <p>{hero[0].attack}<img src={atk} className='stat'/></p>   
                        </div>
                        <div>
                            <img src={hero[0].portrait_url} className='playerImg'/>
                        </div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                            {/* <div>
                                    { enemyMove && (
                                        <p className="enemy-move">will attack</p>
                                    )}
                            </div> */}
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