import react from 'react';
import './mock_style.css';
import logo from './logo.png';

const Cabecero = () => {
    return(
        <div>
            <div className="navbar">
                <a href="/">
                    <img id="logo" src={logo} alt="logo"/>
                </a>
                <div className="dropdown">
                    <button className="dropbtn">Creatividad y diseño 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/">Mis proyectos</a>
                        <a href="">Fotografía</a>
                        <a href="/">Soluciones empresariales</a>
                        <a href="/">Videos</a>
                        <a href="/">Diseño gráfico</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Soluciones IT 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/">Desarrollo de APIS</a>
                        <a href="/">Android</a>
                        <a href="/">IOS</a>
                        <a href="/">Soluciones para pequeñas empresas</a>
                        <a href="/">Soluciones para grandes empresas</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Asistencia 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/">Contacta con nosotros</a>
                        <a href="/">Comunidad interna</a>
                        <a href="/">Calidades y servicios</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Partners 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/">Sé partner</a>
                        <a href="/">Nuestros productos</a>
                        <a href="/">Implantaciones en clientes</a>
                        <a href="/">Otras implantaciones</a>
                    </div>
                </div>
                <div className="dropdown">
                <a href="/">
                    Novedades
                </a>
                </div> 
                <div>Iniciar sesión</div>
            </div>
        </div>

    );
};

export default Cabecero;