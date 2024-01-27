
import health from '../../assets/Images/health.png'
import './ToolBar.scss'

function ToolBar(){
    return(
        <div className='toolBar'>
            <div className='player'>Player Turn
                <div className='player-turns'><img src={health}  alt='turns' width='200px'/></div>
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
                            <button class=" button"><span>VIEW </span></button>
                        </div>
                    </div>
            </div>
            </section> 
            </div>

            <div className='enemy'>Enemy Turn
            <div className='player-turns'><img src={health}  alt='turns' width='200px'/></div>
            </div>
        </div>
    )
}
export default ToolBar;