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
    function cardPressed() {
        if(count < 4){
            // console.log(hero.name)
            // const cardId = event.target.id;
            console.log(`${hero.name} used a card`);
            setCount(count + 1)
        }else{
            alert('out of turns, enemy turn now')
            setEnemyTurn(true)
            setPlayerTurn(false)
            // console.log(playerTurn, enemyTurn)
        }
    }
    if (enemyTurn){
        console.log('enemy turn is now')
        setTimeout(() => {
            setEnemyTurn(false)
            setPlayerTurn(true)
            setCount(0)
            console.log('End');
            console.log(playerTurn)
        }, 2000);
        
    }
    return (
        <div className="board">
            <Header/>
            {/* <Game 
            player={hero.name} health={hero.health} attack={hero.attack} hero={hero.portrait}
            enemy= {characters[0].name} enemyHealth={characters[0].health} enemyAttack={characters[0].attack} enemyHero={characters[0].url}
            count={count}
            // power={power}
            // ^this was also in toolbar
            /> */}
            <ToolBar  
            count={count} cardPressed={cardPressed}
            player={hero.name} health={hero.health} attack={hero.attack} portrait={hero.portrait}
            />
        </div>
    )
}
export default Board;