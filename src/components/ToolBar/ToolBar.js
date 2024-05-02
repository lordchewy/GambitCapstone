import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import Card from '../Card/Card'
// test enemies
import crusader from '../../assets/Enemies/crusader.png'
import death from '../../assets/Enemies/death.png'
import mage from '../../assets/Enemies/mage.png'
import pirate from '../../assets/Enemies/pirate.png'
import soldier from '../../assets/Enemies/soldier.png'


import './ToolBar.scss'

function ToolBar({ 
    count,
    // player,health,attack,defense, portrait,
    hero,setHero,
    setCount={setCount}, setTurn={setTurn},
    turn, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}, round, setRound}){
    const navigate = useNavigate()
    const [showVictoryMessage, setShowVictoryMessage] = useState(false);
    
    // const baseDef = defense
    const [imgAttack, setImgVisible] = useState(false);
    const [imgHeal, setImgHeal] = useState(false);
    const [imgUlt, setImgUlt] = useState(false);
    const [inv, setInv] = useState([])
    function endTurn(){
        setCount(6)
    }

    const Round = {
        1: {
          reward: "Gold coin",
          enemies: [{ name: 'draugr', health: 10, attack: 4, defense:1,url: soldier, id: 2}]
        },
        2: {
          reward: "Health potion",
          enemies: [
            { name: 'draugr', health: 10, attack: 4, defense:1,  url: soldier, id: 2},
            { name: 'draugr', health: 10, attack: 4, defense:1,  url: mage, id: 2}
          ]
        },
        3:{ 
            reward: "Gold coin",
            enemies:[
                {name: 'draugr', health: 10, attack: 4, defense:1,  url: soldier, id: 2},
                { name: 'draugr', health: 10, attack: 4, defense:1,  url: soldier, id: 2}
            ]
        },
        4:{
            reward: "Gold coin",
            enemies:[
                { name: 'draugr', health: 10, attack: 4, defense:1,  url: soldier, id: 2},
                { name: 'draugr', health: 10, attack: 4, defense:1,  url: mage, id: 2},
                { name: 'Pirate lord', health: 35, attack: 4, defense:1,  url: pirate, id: 2}
            ]
        },
        5:{
            reward: "Gold coin",
            enemies:[
                { name: 'Crusader Aldric', health: 75, attack: 4, defense:6,  url: crusader, id: 2}
            ]
        },
        6:{
            reward: "Gold coin",
            enemies:[
                { name: 'Undead King Lorian', health: 200, attack: 10, defense:10,url: death, id: 2}
            ]
        },
        7:[]    
      };

    if (!Round[round] === undefined){
        navigate('/')
    }
    if(hero.health <= 0){
        navigate('/')
    }
    
    useEffect(() => {
            // Check if the current round exists in the Round object
        if (Round[round].length === 0) {
            navigate('/') // Redirect if round does not exist
        } else {
            // Update foe state with the foes for the current round
            setFoe([...Round[round].enemies]);
        }
    }, [round]); // Listen for changes in the round prop


    const [foe, setFoe] = useState([...Round[round].enemies]);
    const rewards = []


    useEffect(() => {
        if (foe[0] === undefined) {
            setShowVictoryMessage(true);
            setRound(prevRound => prevRound + 1)
            
            const loot = Round[round].reward
            console.log('you got: ', loot)
            setInv([...inv, loot])

            setTurn(0)
            setFoe([
                ...Round[round].enemies
            ]);
            setCount(0)
            setTimeout(() => {
                setShowVictoryMessage(false);
            }, 200);
        }
    }, [foe[0]]);
    
    

    
    return(
        <>
        <div>
            {showVictoryMessage && (
                <p className="board-message__victory">Next Round</p>
            )}
        </div>
        <Game
            hero={hero} setHero={setHero}
            foes={foe}
            enemyAtk = {foe[0]?.attack || 0}
            enemyDef = {foe[0]?.defense || 0}
            inv={inv}
            
            
        
            imgAttack={imgAttack}
            imgHeal= {imgHeal}
            imgUlt = {imgUlt}


            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}


            round={round} setRound={setRound}
        />

        <div className='Bar'>
            <div className='Bar-curr'>
                {count}/5
            </div>

            <div className="Bar-hand">
                <Card count={count} foe={foe}  setCount={setCount} setFoe={setFoe}
                hero={hero} setHero={setHero}
                turn={turn}
                setImgVisible={setImgVisible}
                setImgHeal={setImgHeal}
                setImgUlt={setImgUlt}
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
export default ToolBar;