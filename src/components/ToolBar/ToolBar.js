import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import Card from '../Card/Card'

import healthbar from '../../assets/Images/health.png'
import ghost from '../../assets/Images/Crow.png'


import './ToolBar.scss'

function ToolBar({ count,player,health,attack, portrait,setCount={setCount}, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}}){
    console.log(typeof setCount)

    const navigate = useNavigate()
    // const [imgVisible, setImgVisible] = useState(false);
    const [imgHeal, setImgHeal] = useState(false);
    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});
    const [playerHealth, setPlayerHealth] = useState(p1.health);
    // const [playerAtk, setPlayerAtk] = useState(p1.attack);
    // console.log(enemyTurn)
    const [foe, setFoe] = useState([
        { name: 'banshee', health: 50, attack: 8, url: ghost, id: 2},
    ]);




    function endTurn(){
        setCount(5)
    }

// 
    useEffect(() => {
        if (foe[0] === undefined){
            alert('you win!');
            navigate('/');
            // need to summon modal here
        }
    }, [foe, navigate]);

    const playerTokens = []
        // loop to initialize tokens
        for (let i = 1; i <= 5 - count; i++) {
            playerTokens.push(<div key={i} className={`player token${i}`}></div>);
        }

    return(
        <>
        <Game
            portrait={p1.portrait}
            health={playerHealth} setPlayerHealth={setPlayerHealth}
            player={p1.player}
            foes={foe}
            // attackFunc={attackFunc}
            // imgVisible={imgVisible}
            imgHeal= {imgHeal}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            // heal={heal} setHeal={setHeal}
        />

        <div className='Bar'>
            <div className='player'>
                <div className='player-turns'>turns
                    {playerTokens.map((token, index) => (
                        <div key={index} className={`player token${index + 1}`}></div>
                    ))}
                </div>
            <div className='player-turns'>
                <img src={healthbar} alt='turns' width='200px' />
            </div>
            </div>
            <div>
            <section className="new">


            <div className="container">
                <Card count={count} foe={foe} p1={p1} setCount={setCount} setFoe={setFoe}/>
            </div>

            </section>
            <div><button onClick={()=>{endTurn()}} className='modal-button'>End Turn</button></div> 
            </div>
        </div>
        </>
    )
}
export default ToolBar;