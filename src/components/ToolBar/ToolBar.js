import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import Card from '../Card/Card'
import ghost from '../../assets/Images/Crow.png'


import './ToolBar.scss'

function ToolBar({ count,player,health,attack,defense, portrait,setCount={setCount}, 
    turn, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}}){
    // console.log(typeof setCount)

    const navigate = useNavigate()

    
    const [p1, setP1] = useState({  player: player, health: health, attack: attack, defense: defense, portrait:portrait});
    const [playerHealth, setPlayerHealth] = useState(p1.health);


    const [imgVisible, setImgVisible] = useState(false);
    const [imgHeal, setImgHeal] = useState(false);
    // const [playerAtk, setPlayerAtk] = useState(p1.attack);
    // console.log(enemyTurn)
    const [foe, setFoe] = useState([
        { name: 'banshee', health: 100, attack: 2, defense:1,  url: ghost, id: 2},
    ]);
    // console.log(foe[0].attack)




    function endTurn(){
        setCount(5)
    }

    // const playerTokens = []
    //     // loop to initialize tokens
    //     for (let i = 1; i <= 5 - count; i++) {
    //         playerTokens.push(<div key={i} className={`player token${i}`}></div>);
    //     }

    return(
        <>
        <Game
            health={playerHealth}
            setP1Health= {setPlayerHealth}
            portrait={p1.portrait}
            player={p1.player}
            foes={foe}
            enemyAtk = {foe[0].attack}
            enemyDef = {foe[0].defense}
        
            imgVisible={imgVisible}
            imgHeal= {imgHeal}


            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            playerAttack = {p1.attack}
            playerDefense = {p1.defense}
        />

        <div className='Bar'>
            <div className='Bar-curr'>
                {count}/5
            </div>

            <div className="Bar-hand">
                <Card count={count} foe={foe} p1={p1} setCount={setCount} setFoe={setFoe}
                health={playerHealth}
                setP1Health= {setPlayerHealth}
                setP1={setP1}
                turn={turn}

                setImgVisible={setImgVisible}
                setImgHeal={setImgHeal}
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