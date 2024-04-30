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

function ToolBar({ 
    hero,setHero,count,
    setCount={setCount}, setTurn={setTurn},turn, enemyTurn={enemyTurn}, setEnemyTurn={setEnemyTurn}, 
    round, setRound}){
    const navigate = useNavigate()
    const [showVictoryMessage, setShowVictoryMessage] = useState(false);
    function endTurn(){
        setTurn(turn+1) 
    }


    const Round = {1:[{ name: 'draugr', health: 5, attack: 4, defense:1,url: soldier, id: 2}],
    2:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: mage, id: 2}],
    3:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'Corvian', health: 20, attack: 4, defense:1,  url: ghost, id: 2}],
    4:[{ name: 'draugr', health: 5, attack: 4, defense:1,  url: soldier, id: 2},{ name: 'draugr', health: 5, attack: 4, defense:1,  url: mage, id: 2},{ name: 'Pirate lord', health: 20, attack: 4, defense:1,  url: pirate, id: 2}],
    5:[{ name: 'Crusader Aldric', health: 50, attack: 4, defense:6,  url: crusader, id: 2}],
    6:[{ name: 'Undead King Lorian', health: 100, attack: 4, defense:10,url: death, id: 2}],
    7:[]
    }
    let CurrRound = 2


    if (!Round[round]){
        navigate('/')
    }

    // useEffect(() => {
    //     // console.log(round); // Ensure the correct round value is logged
    //     // Check if the current round exists in the Round object
    //     if (Round[round].length === 0 | Round[round === undefined]) {
    //         navigate('/') // Redirect if round does not exist
    //     } else {
    //         // Update foe state with the foes for the current round
    //         setFoe([...Round[round]]);
    //     }
    // }, [round]); // Listen for changes in the round prop


    const [foe, setFoe] = useState(Round[CurrRound]);

    useEffect(() => {
        if (foe[0] === undefined) {
            setShowVictoryMessage(true);
            setRound(prevRound => prevRound + 1)
            // console.log(round)
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

    if (foe === null) {
        return <p>Loading...</p>;
    }
    return(
        <>
        <div>
            {showVictoryMessage && (
                <p className="board-message__victory">Next Round</p>
            )}
        </div>
        <Game
            hero={hero} setHero={setHero}

            foe={foe} setFoe={setFoe}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            round={round} setRound={setRound}
            endTurn={endTurn} turn={turn}
            count={count} setCount={setCount}
        />
        </>
    )
}
export default ToolBar;