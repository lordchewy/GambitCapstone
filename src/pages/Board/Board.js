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
    const {characterId } = useParams();
    const [hero, setHero] = useState(null);
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
    // console.log(hero)

    const getEnemy = async (round)  => {
        try {
            console.log('round: ', round)
        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getHero(characterId);
        // getEnemy(round)
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

    return (
        <div className="board">
            {showEnemyTurnMessage && (
                <p className="board-message">Enemy's Turn</p>
            )}
            {/* <Header/> */}
            <ToolBar
            // enemyTurn={enemyTurn}  
            count={count}  setCount={setCount}
            hero={hero} setHero={setHero}
            enemyTurn={enemyTurn} setEnemyTurn={setEnemyTurn}
            turn ={turn}
            round={round} setRound={setRound}
            setTurn={setTurn}
            />
        </div>
    )
}
export default Board;