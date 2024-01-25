import './ToolBar.scss'

function ToolBar(){
    return(
        <div className='toolBar'>
            <div>Player Turn</div>

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

            <div>Enemy Turn</div>
        </div>
    )
}
export default ToolBar;