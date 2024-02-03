import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import ToolBar from "../../components/ToolBar/ToolBar";
import Header from "../../components/Header/Header";
import './Board.scss'

function Board(){


    const [count, setCount] = useState(0);
    const { characterId } = useParams();
    const [hero, setHero] = useState(null);
    const [playerTurn, setPlayerTurn] = useState(true)
    const [enemyTurn, setEnemyTurn] = useState(false)

    // console.log('here is the character id on board: ', characterId)
    // console.log(playerTurn)

    const getHero = async (characterId) => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${characterId}`);
            setHero(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getHero(characterId);
    }, [characterId]);


    if (hero === null) {
        return <p>Loading...</p>;
    }
    if(count > 4){
        alert('you are out of turns')
            setEnemyTurn(true)
            setPlayerTurn(false)
            setCount(0)
            setTimeout(() => {
                setEnemyTurn(false);
                setPlayerTurn(true);
            }, 200);
    }


    return (
        <div className="board">
            <Header/>
            <ToolBar
            enemyTurn={enemyTurn}  
            count={count}  setCount={setCount}
            player={hero.name} health={hero.health} attack={hero.attack} portrait={hero.portrait}
            />
        </div>
    )
}
export default Board;