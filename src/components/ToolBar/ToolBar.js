import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import Card from '../Card/Card'
import ghost from '../../assets/Images/Crow.png'


import './ToolBar.scss'

function ToolBar({ count,player,health,attack,defense, portrait,setCount={setCount}, setTurn={setTurn},
    turn, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}, round, setRound}){
    // console.log(typeof setCount)

    const navigate = useNavigate()
    const [showVictoryMessage, setShowVictoryMessage] = useState(false);


    
    const [p1, setP1] = useState({  player: player, health: health, attack: attack, defense: defense, portrait:portrait});
    const [playerHealth, setPlayerHealth] = useState(p1.health);
    
    const baseDef = defense

    const [imgAttack, setImgVisible] = useState(false);
    const [imgHeal, setImgHeal] = useState(false);
    const [imgUlt, setImgUlt] = useState(false);

    const [foe, setFoe] = useState([
        { name: 'banshee', health: 5, attack: 4, defense:1,  url: ghost, id: 2},
        { name: 'banshee', health: 5, attack: 4, defense:1,  url: ghost, id: 2},
        { name: 'banshee', health: 5, attack: 4, defense:1,  url: ghost, id: 2}
    ]);


    function endTurn(){
        setCount(6)
    }
    
    useEffect(() => {
        if (foe[0] === undefined) {
            setShowVictoryMessage(true);
            setRound(round+1)
            setTurn(0)
            setFoe([
                { name: 'banshee', health: 5, attack: 4, defense: 1, url: ghost, id: 2 }
            ]);
            setCount(0)
            setTimeout(() => {
                setShowVictoryMessage(false);
            }, 1000);
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
            setP1={setP1}
            p1 ={p1}
            health={playerHealth}
            setP1Health= {setPlayerHealth}
            portrait={p1.portrait}
            player={p1.player}
            foes={foe}
            enemyAtk = {foe[0]?.attack || 0}
            enemyDef = {foe[0]?.defense || 0}
            
        
            imgAttack={imgAttack}
            imgHeal= {imgHeal}
            imgUlt = {imgUlt}


            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            playerAttack = {p1.attack}
            playerDefense = {p1.defense}
            baseDef = {baseDef}

            round={round} setRound={setRound}
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