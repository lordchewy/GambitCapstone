import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, useSpring } from 'react-spring';


import Modal from '../Modal/Modal';
import Card from '../Card/Card';
import './Game.scss'
import './../Header/Header'
import world from '../../assets/Images/background5.png'
import atk from '../../assets/Images/attack.png'
import def from '../../assets/Images/defense.png'

function Game({
    hero, 
    foe,
    enemyTurn, setEnemyTurn,round,setRound,
    count,setCount,turn,endTurn
}){

    const navigate = useNavigate()
    const [enemyAttack, setEnemyAttack] = useState(false)
    const [enemies, setEnemies] = useState(foe)
    const [player,setPlayer] = useState(hero)
    const baseDef = hero.defense
    console.log(enemies)

    if(player.health <= 0){
        navigate('/')
    }
    useEffect(() => {
        if (enemyTurn === true) {
            console.log(enemies)
            let x = 0 //set a counter to if correct amount of attacks occur
            enemies.forEach((enemy) => {
                if(hero.defense){
                    const leftover = Number(player.defense) - enemy.attack
                    const newHealth = Number(player.health)- (-1*Number(leftover));
                    console.log(newHealth)
                    x+= 1
                    setTimeout(() => {
                        setEnemyAttack(false)
                    }, 400);
                    setPlayer({...player, health: newHealth})
                    setEnemyAttack(true)
                    setEnemyTurn(false)
                }else{
                    const newHealth = Number(player.health)- enemy.attack;
                    setTimeout(() => {
                        setEnemyAttack(false)
                    }, 400);
                    setPlayer(newHealth);
                    setEnemyAttack(true)
                    setEnemyTurn(false)
                    
                }
            });
        console.log('enemy count: ', x)
        }
        setPlayer({ ...player, defense: baseDef })
        
    }, [enemyTurn]);




    return(
        <>

        
        <div className='game-container'>
            <div>
                <Modal text={'relics'}/>
            </div>
            <img src={world} className='map'/>


            <div className='game'>
                    
                    <div className='game-board__player'>
                        <div className='game-board__player__health'>
                            <p>{player.name}</p>
                            <p>{player.health}</p>
                        </div>
                        <div className='game-board__player__stats'>
                            <p>{player.defense}<img src={def} className='stat'/></p>
                            <p>{player.attack}<img src={atk} className='stat'/></p>   
                        </div>
                        <div>
                            <img src={player.portrait_url} className='playerImg'/>
                        </div>
                    </div>

                    <div className='game-board'>
                        <div className='game-board__animation'>
                        </div>
                    </div>
                    
                    {enemies.map((enemy, id) => {
                    if (enemy) { 
                        return (
                            <div className='game-board__enemy' key={id} >
                                <div className='game-board__player__health'>
                                    <p>{enemy.name}</p>
                                    <p>{enemy.health}</p>
                                </div>
                                <div className='game-board__player__stats'>
                                    <p>{enemy.defense}<img src={def} className='stat'/></p>
                                    <p>{enemy.attack}<img src={atk} className='stat'/></p>   
                                </div>  
                                    <div><img src={enemy.url} alt={foe.name} className='enemyImg'/></div>
                                </div>
                        );
                    }
                    return null; // If condition is false, return null or nothing
                })}
            </div>
            <div>
                <Modal text={`Round: ${round}`}/>
            </div>
        </div>

        <div className='Bar'>
            <div className='Bar-curr'>
                {count}/5
            </div>

            <div className="Bar-hand">
                <Card 
                count={count} setCount={setCount}
                enemies={enemies} setEnemies={setEnemies}
                player={player} setPlayer={setPlayer}
                turn={turn}
                round={round} setRound={setRound}
                />
            </div>
        
            <div className='Bar-next'>
                <button onClick={()=>{endTurn()}}>End Turn
                <p>current turn: {turn}</p>
                </button>
            </div> 
        </div>
        </>
    )
}
export default Game;