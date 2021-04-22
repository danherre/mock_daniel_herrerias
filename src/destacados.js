import React from 'react';

const Destacados = () => {
    return(
        <div>
            <div class="row no-gutters justify-content-md-center destacados">
                <div>
                    <a href="https://picsum.photos/300/300?random=1">
                        <div class="image" style={{backgroundImage:'url("https://picsum.photos/300/300?random=1")'}}>
                            <div class="text">
                                <h3>Destacados 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus mi ut augue pharetra facilisis.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://picsum.photos/300/300?random=2">
                        <div class="image" style={{backgroundImage:'url("https://picsum.photos/300/300?random=2")'}}>
                            <div class="text">
                                <h3>Destacados 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus mi ut augue pharetra facilisis.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://picsum.photos/300/300?random=3">
                        <div class="image" style={{backgroundImage:'url("https://picsum.photos/300/300?random=3")'}}>
                            <div class="text">
                                <h3>Destacados 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus mi ut augue pharetra facilisis.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row no-gutters justify-content-md-center destacados">
                <div>
                    <a href="https://picsum.photos/630/300?random=1">
                        <div class="image img-wide" style={{backgroundImage:'url("https://picsum.photos/630/300?random=1")'}}>
                            <div class="text">
                                <h3>Destacados 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus mi ut augue pharetra facilisis.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://picsum.photos/300/300?random=4">
                        <div class="image" style={{backgroundImage:'url("https://picsum.photos/300/300?random=4")'}}>
                            <div class="text">
                                <h3>Destacados 5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus mi ut augue pharetra facilisis.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Destacados;