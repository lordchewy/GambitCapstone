
import health from '../../assets/Images/health.png'
import './ToolBar.scss'

function ToolBar({power, turns}){
    const playerTokens = [];
    for (let i = 1; i <= 5 - turns; i++) {
        playerTokens.push(<div key={i} className={`player token${i}`}></div>);
        // console.log(playerTokens)
    }

    return(
        <div className='toolBar'>
            <div className='player'>
                <div className='player-turns'>turns
                    {playerTokens.map((token, index) => (
                        <div key={index} className={`player token${index + 1}`}></div>
                    ))}
                </div>
            <div className='player-turns'>
                <img src={health} alt='turns' width='200px' />
            </div>
            </div>

            <div>
            <section className="new">
            <div className="container">
                    <div className="card">
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="title">card</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                            <button className=" button" onClick={power}><span>attack </span></button>
                        </div>
                    </div>
            </div>
            </section> 
            </div>
        </div>
    )
}
export default ToolBar;