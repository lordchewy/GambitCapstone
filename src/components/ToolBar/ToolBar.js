import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Game from '../Game/Game';
import healthbar from '../../assets/Images/health.png'
import ghost from '../../assets/Images/ghost.png'
import wolf from '../../assets/Images/wolf.png'
import dragon from '../../assets/Images/dragon.png'

import './ToolBar.scss'

function ToolBar({ count,player,health,attack, portrait,setCount, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}}){

    const navigate = useNavigate()
    const [imgVisible, setImgVisible] = useState(false);
    const [imgHeal, setImgHeal] = useState(false);
    const [p1, setP1] = useState({  player: player, health: health, attack: attack, portrait:portrait});
    const [playerHealth, setPlayerHealth] = useState(p1.health);
    // const [playerAtk, setPlayerAtk] = useState(p1.attack);

    const [foe, setFoe] = useState([
        { name: 'Grim', health: 200, attack: 8, url: wolf, id: 1 },
        { name: 'banshee', health: 50, attack: 8, url: ghost, id: 2},
    ]);
    // console.log(enemyTurn)


    function attackFunc() {
            const newHp = Number(foe[0].health) - Number(p1.attack);
            if (newHp <= 0) {
                setFoe(prevFoe => prevFoe.slice(1));
            } else {
                setFoe(prevFoe => [{ ...prevFoe[0], health: newHp }, ...prevFoe.slice(1)]);
            }
            const specificFoeElement = document.getElementById(0);
            if (specificFoeElement) {
                setImgVisible(true); // Set the state to display the img
                specificFoeElement.classList.add('flash');
                setTimeout(() => {
                    specificFoeElement.classList.remove('flash');
                    setImgVisible(false); // Set the state to hide the img
                }, 200);
            }
        setCount(count + 1);
    }

    function healFunc(){
        const healing = Number(playerHealth)+10 
        setPlayerHealth(healing)   
        console.log(healing)
        setCount(count+2)
        setImgHeal(true); // Set the state to display the img
        setTimeout(() => {
            setImgHeal(false); // Set the state to hide the img
        }, 200);
    }
// 
function attackAll() {
    setFoe(prevFoe => {
        return prevFoe.map(fo => {
            const newHp = fo.health - p1.attack; // Adjust health based on player's attack
            console.log('attack all: ', newHp);

            // Check if health is less than or equal to 0
            if (newHp <= 0) {
                return null; // If health is 0 or less, mark for removal
            } else {
                return { ...fo, health: newHp }; // Otherwise, update health
            }
        }).filter(Boolean); // Filter out null elements
    });
    setCount(count+3)
}

function attackUp(){
    const atkUp = Number(p1.attack)+10 
    console.log(atkUp)
    setP1({ ...p1, attack: atkUp })
    setCount(count + 1);
}

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
            attackFunc={attackFunc}
            imgVisible={imgVisible}
            imgHeal= {imgHeal}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            // heal={heal} setHeal={setHeal}
        />

        <div className='toolBar'>
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
                        {count <= 4 && (
                            <div className="card" id='a'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar">cost 1</div>
                                    <button className="button" onClick={() => {  attackUp();}} id='5'><span>atk + 10 </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 3 && (
                            <div className="card" id='b'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    
                                    <div className="filledbar">cost 1</div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='2'><span>{p1.attack} dmg </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 2 && (
                            <div className="card" id='c'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar">cost 1</div>
                                    <button className="button" onClick={() => {  attackFunc(); }} id='3'><span>{p1.attack} dmg  </span></button>
                                </div>
                            </div>
                        )}

                        {count <= 1 && (
                            <div className="card" id='d'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar">cost 1</div>
                                    <button className="button" onClick={() => {  attackAll(); }} id='4'><span>{p1.attack} dmg to all  </span></button>
                                </div>
                            </div>
                        )}

                    {count <= 0 && (
                            <div className="card" id='e'>
                                <h3 className="title">card</h3>
                                <div className="bar">
                                    <div className="emptybar"></div>
                                    <div className="filledbar">cost 2</div>
                                    <button className="button" onClick={() => {  healFunc() }} id='5'><span>health + 10 </span></button>
                                </div>
                            </div>
                        )}  
            </div>
            </section>
            <div><button onClick={()=>{endTurn()}} className='modal-button'>End Turn</button></div> 
            </div>
        </div>
        </>
    )
}
export default ToolBar;