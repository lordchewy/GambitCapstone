import { useState } from 'react';

import health from '../../assets/Images/health.png'
import './ToolBar.scss'

function ToolBar({ turns, cardPressed}){
    console.log(turns)



    // Function to remove a token
    // const removeToken = () => {
    //     if (playerTokens.length > 0) {
    //         setPlayerTokens(prevTokens => prevTokens.slice(1)); // Remove the first token
    //     }
    // };

    // // Your loop to initialize tokens
    // for (let i = 1; i <= 5 - turns; i++) {
    //     playerTokens.push(<div key={i} className={`player token${i}`}></div>);
    // }


    return(
        <div className='toolBar'>
            <div className='player'>
                {/* <div className='player-turns'>turns
                    {playerTokens.map((token, index) => (
                        <div key={index} className={`player token${index + 1}`}></div>
                    ))}
                </div> */}
            <div className='player-turns'>
                <img src={health} alt='turns' width='200px' />
            </div>
            </div>

            <div>
            <section className="new">
            <div className="container">
                    <div className="card" id='1'>
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card" id='2'>
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card" id='3'>
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card" id='4'>
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card" id='5'>
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button" onClick={cardPressed} id='5'><span>attack </span></button>
                        </div>
                    </div>
            </div>
            </section> 
            </div>
        </div>
    )
}
export default ToolBar;