import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div style={{width:'100%'}}>
                            <Carousel>
                                <Carousel.Item>
                                    <a href="https://picsum.photos/1200/300?random=1">
                                        <img
                                            className="d-block w-100"
                                            src="https://picsum.photos/1200/300?random=1"
                                            alt="First slide"
                                        />
                                    </a>
                                    <Carousel.Caption>
                                        <h2>Primera foto</h2>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <a href="https://picsum.photos/1200/300?random=2">
                                        <img
                                            className="d-block w-100"
                                            src="https://picsum.photos/1200/300?random=2"
                                            alt="First slide"
                                        />
                                    </a>
                                    <Carousel.Caption>
                                        <h2>Segunda foto</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <a href="https://picsum.photos/1200/300?random=3">
                                        <img
                                            className="d-block w-100"
                                            src="https://picsum.photos/1200/300?random=3"
                                            alt="First slide"
                                        />
                                    </a>
                                    <Carousel.Caption>
                                        <h2>Tercera foto</h2>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;