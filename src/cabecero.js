import react from 'react';
import './mock_style.css';
import logo from './logo.png';

const Cabecero = () => {
    return(
        <div class="ui huge menu">
            <a>
                <img id="logo" src={logo} alt="logo"/>
            </a>
            <div class="center menu">
                <div class="ui dropdown item">
                    Link del menú <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item">English</a>
                        <a class="item">Russian</a>
                        <a class="item">Spanish</a>
                    </div>
                </div>
                <div class="ui dropdown item">
                    Link del menú <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item">English</a>
                        <a class="item">Russian</a>
                        <a class="item">Spanish</a>
                    </div>
                </div>
                <div class="ui dropdown item">
                    Link del menú <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item">English</a>
                        <a class="item">Russian</a>
                        <a class="item">Spanish</a>
                    </div>
                </div>
                <div class="ui dropdown item">
                    Link del menú <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item">English</a>
                        <a class="item">Russian</a>
                        <a class="item">Spanish</a>
                    </div>
                </div>
                <div class="ui dropdown item">
                    Link del menú <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item">English</a>
                        <a class="item">Russian</a>
                        <a class="item">Spanish</a>
                    </div>
                </div>
            </div>
            <div class="right menu">
                <div class="item">
                    <div>Iniciar Sesión</div>
                </div>
            </div>
        </div>
    );
};

export default Cabecero;