import Slider from '../Slider/slider.js';
import Navbar from '../Navbar/nav.js';
import './home.css';
function Home() {
    return (
        <div className="App">
            <div class="home-container">
                <div id="item-0">
                    <Navbar />
                </div>
                <div id="item-1">
                    <Slider />
                </div>
                <div id="item-2">Footer</div>
                <div id="item-3">Logo</div>
            </div>
        </div>
    );
}

export default Home;


