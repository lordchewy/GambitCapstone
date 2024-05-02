import { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';

// import Alert from '../Alert/Alert';
import Modal from '../Modal/Modal';

import './Game.scss'
import './../Header/Header'




import world from '../../assets/Images/background5.png'
import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Game({
    hero,setHero,
    // portrait,health, player,playerAttack, playerDefense,baseDef,setP1,p1,setP1Health,
    foes,enemyAtk,enemyDef,
    inv,
    imgAttack,imgHeal,imgUlt,
    enemyTurn, setEnemyTurn,
    round, setRound})
    {
    // const ImageStyle = {display: 'block',
    // position: 'absolute',
    // zIndex: 999,
    // width: '400px',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // animation: 'slideToLeft 10s linear forwards'} 

    // const ImageStyle3 = {display: 'block',
    // position: 'absolute',
    // zIndex: 999,
    // width: '1000px',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // animation: 'slideToLeft 20s linear forwards'} 


    // const self = {display: 'block',
    // position: 'absolute',
    // zIndex: 999,
    // width: '500px',
    // top: '0%',
    // right:'60%',}


    // const ImageStyle2 = {display: 'block',
    // position: 'absolute',
    // zIndex: 999,
    // width: '500px',
    // top: '30%',
    // right:'60%',
    // transform: 'scaleX(-1)',} 

    const [enemyAttack, setEnemyAttack] = useState(false)


    useEffect(() => {
        if (enemyTurn === true) {
            // console.log(foes)
            let x = 0
            foes.forEach((foe) => {
                if(hero.defense){
                    const leftover = Number(hero.defense) - foe.attack
                    const newHealth = Number(hero.health)- (-1*Number(leftover));
                    x+= 1
                    setTimeout(() => {
                        setEnemyAttack(false)
                    }, 400);
                    setHero(prevHero => ({...prevHero, health:newHealth}))
                    // setP1Health(newHealth);
                    setEnemyAttack(true)
                    setEnemyTurn(false)
                }else{
                    const newHealth = Number(hero.health)-foe.attack;
                    setTimeout(() => {
                        setEnemyAttack(false)
                    }, 400);
                    setHero(prevHero => ({...prevHero, health:newHealth}))
                    setEnemyAttack(true)
                    setEnemyTurn(false)
                    
                }
            });
        console.log('enemy count: ', x)
        }
        // setHero({ ...hero, defense: baseDef })
        
    }, [enemyTurn]);

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
            <div>
                {/* <Modal text={`Round: ${round}`}/> */}
            </div>
        </div>
    )
}
export default Game;