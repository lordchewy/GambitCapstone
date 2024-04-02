import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import ToolBar from "../../components/ToolBar/ToolBar";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import './Board.scss'

function Board(){
    const [round, setRound] = useState(1)
    const [count, setCount] = useState(0);
    const { characterId } = useParams();
    const [hero, setHero] = useState(null);
    const [enemy, setEnemy] = useState(null)
    const [foes, setFoes] = useState(null)
    const [enemyTurn, setEnemyTurn] = useState(false)
    const [turn, setTurn] = useState(0)

    const [showEnemyTurnMessage, setShowEnemyTurnMessage] = useState(false);
    // console.log(turn)

    const getHero = async (characterId) => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${characterId}`);
            setHero(response.data[0]);
            // console.log(response.data)
        } catch (err) {
            console.log(err);
        }
    };


    

    const getEnemy = async () => {
        try {
            // Fetch data from API
            const response = await axios.get(`http://localhost:8080/characters`);
            const enemyData = response.data;
    
            // Create a heroMap for efficient lookup
            const heroMap = new Map(enemyData.map(foe => [foe.hero_id, foe]));
    
            // Define resultList
            const resultList = [
                {1:[5]},
                {2:[5,6]},
                {3:[5,5,2]},
                {4:[5,6,7]},
                {5:[3]},
                {6:[4]},
                {7:[]}
            ];
    
            // Process resultList to create Round
            const Round = {};
            resultList.forEach(item => {
                const [key, values] = Object.entries(item)[0];
                Round[key] = values.map(value => {
                    const enemy = heroMap.get(value);
                    if (enemy) {
                        return {
                            name: enemy.name,
                            health: enemy.health,
                            attack: enemy.attack,
                            defense: enemy.defense,
                            url: enemy.portrait_url,
                            id: enemy.hero_id
                        };
                    }
                    return null;
                });
            });
    
            console.log(Round);
    
            // Set foes using Round
            setFoes(Round);
        } catch (err) {
            console.log(err);
        }
    }
    



    useEffect(() => {
        getHero(characterId);
        getEnemy()
    }, [characterId]);


    useEffect(() => {
        if (count > 5) {
            setShowEnemyTurnMessage(true);
            setTimeout(() => {
                setShowEnemyTurnMessage(false);
                setEnemyTurn(true)
                setTurn(turn+1) 
                setCount(0);
            }, 400);
        }
    }, [count]);

    if (hero === null) {
        return <p>Loading...</p>;
    }
    if (foes === null) {
        return <p>Loading...</p>;
    }

    console.log(foes)
    return (
        <div className="board">
            {showEnemyTurnMessage && (
                <p className="board-message">Enemy's Turn</p>
            )}
            {/* <Header/> */}
            <ToolBar
            // enemyTurn={enemyTurn}  
            count={count}  setCount={setCount}
            player={hero.name} health={hero.health} attack={hero.attack} portrait={hero.portrait_url} defense={hero.defense}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            turn ={turn}
            round={round} setRound={setRound}
            setTurn={setTurn}
            enemies={foes}
            setEnemies={setFoes}
            />
        </div>
    )
}
export default Board;