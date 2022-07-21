import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './slider.css'

import bloodred from './bloodred.jpeg'; // Tell webpack this JS file uses this image

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div style={{width:"50%"}}>
                    <img id="bloodred" src= {bloodred}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Slider;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
