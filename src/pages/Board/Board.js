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
    const [enemyTurn, setEnemyTurn] = useState(false)

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


    useEffect(() => {
        if (count > 4) {
            // Alert indicating enemy turn need to summon modal here
            alert('enemy turn');
            setEnemyTurn(true) 
            setTimeout(() => {
                setCount(0);
            }, 200);
        }
    }, [count]);

    if (hero === null) {
        return <p>Loading...</p>;
    }

    


    return (
        <div className="board">
            <Header/>
            <ToolBar
            // enemyTurn={enemyTurn}  
            count={count}  setCount={setCount}
            player={hero.name} health={hero.health} attack={hero.attack} portrait={hero.portrait}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            />
        </div>
    )
}
export default Board;