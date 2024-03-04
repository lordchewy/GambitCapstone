import React from 'react';
import { useState } from 'react';

import './Alert.scss'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

function Alert({foes}) {
    const [round, setRound] = useState(0)
    console.log(foes)
    function nextRound(){
            setRound(round+1)
    }
    // Conditionally render the modal based on the isOpen prop

    return (
        <div className="next">
            <button onClick={nextRound}> Next Round</button>
            <div>{round}</div>

        </div>
    );
}

export default Alert;
