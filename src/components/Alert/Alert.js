import React from 'react';
import { useState } from 'react';

import './Alert.scss'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

function Alert({foes}) {
    const [round, setRound] = useState(0)
    // console.log(foes[0].health)
    function nextRound(){
        if (foes && foes[0] === undefined) {
            setRound(round + 1);
        }
    }


    return (
        <div className="next">
            <button onClick={nextRound}> Next Round</button>
            <div>{round}</div>

        </div>
    );
}

export default Alert;
