
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
            <section class="new">
            <div class="container">
                        <div class="card">
                        <h3 class="title">card</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                            <button class=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="title">card</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                            <button class=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="title">card</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                            <button class=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="title">card</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                            <button class=" button"><span>VIEW </span></button>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="title">card</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                            <button class=" button" onClick={power}><span>Attack </span></button>
                        </div>
                    </div>
            </div>
            </section> 
            </div>
        </div>
    )
}
export default ToolBar;