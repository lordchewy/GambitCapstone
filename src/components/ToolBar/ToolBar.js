import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import Card from '../Card/Card'
import ghost from '../../assets/Images/Crow.png'
// test enemies
import crusader from '../../assets/Enemies/crusader.png'
import death from '../../assets/Enemies/death.png'
import mage from '../../assets/Enemies/mage.png'
import pirate from '../../assets/Enemies/pirate.png'
import soldier from '../../assets/Enemies/soldier.png'


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
    function endTurn(){
        setCount(6)
    }


    const Round = {1:[{ name: 'draugr', health: 5, attack: 4, defense:1,url: soldier, id: 2}],
    2:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: mage, id: 2}],
    3:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'Corvian', health: 20, attack: 4, defense:1,  url: ghost, id: 2}],
    4:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: mage, id: 2},{ name: 'Pirate lord', health: 20, attack: 4, defense:1,  url: pirate, id: 2}],
    5:[{ name: 'Crusader Aldric', health: 50, attack: 4, defense:6,  url: crusader, id: 2}],
    6:[{ name: 'Undead King Lorian', health: 100, attack: 4, defense:10,url: death, id: 2}],
    7:[]
    }


    if (!Round[round]){
        navigate('/')
    }
    if(playerHealth <= 0){
        navigate('/')
    }
    
    useEffect(() => {
        console.log(round); // Ensure the correct round value is logged
    
        // Check if the current round exists in the Round object
        if (Round[round].length === 0) {
            navigate('/') // Redirect if round does not exist
        } else {
            // Update foe state with the foes for the current round
            setFoe([...Round[round]]);
        }
    }, [round]); // Listen for changes in the round prop


    const [foe, setFoe] = useState([...Round[round]]);


    useEffect(() => {
        if (foe[0] === undefined) {
            setShowVictoryMessage(true);
            setRound(prevRound => prevRound + 1)
            console.log(round)
            setTurn(0)
            setFoe([
                ...Round[round]
            ]);
            setCount(0)
            setTimeout(() => {
                setShowVictoryMessage(false);
            }, 200);
        }
    }, [foe[0]]);

    console.log(foe)
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
            playerAttack = {p1.attack}
            playerDefense = {p1.defense}
            baseDef = {baseDef}
            foes={foe}
            enemyAtk = {foe[0]?.attack || 0}
            enemyDef = {foe[0]?.defense || 0}
            
        
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