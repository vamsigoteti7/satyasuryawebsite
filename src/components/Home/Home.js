import React from 'react';
import Carousel from 'react-elastic-carousel'
import img1 from '../../images/BILERBAGS.jpg';
import img2 from '../../images/CANDLEFILTERBAGS.jpg';
import img3 from '../../images/CARBAGS.jpg';
import img4 from '../../images/CFBAG1.jpg';
import img5 from '../../images/CFIMAGE.jpg';
import img6 from '../../images/F1.jpg';
import img7 from '../../images/MICRONISER.jpg';

const Home = (props) => {
    return (
        <div class="container">
            <div class="row firstRow">
                <div class="col">

                </div>
                <div class="col">
                    <h1>Home</h1>
                </div>
                <div class="col">

                </div>
            </div>

            <div class="suryacontent">
                <Carousel itemsToShow={1}>
                    <div><img src={img1} height="300" width="300" alt="img1"></img></div>
                    <div><img src={img2} height="300" width="300" alt="img2"></img></div>
                    <div><img src={img3} height="300" width="300" alt="img3"></img></div>
                    <div><img src={img4} height="300" width="300" alt="img4"></img></div>
                    <div><img src={img5} height="300" width="300" alt="img5"></img></div>
                    <div><img src={img6} height="300" width="300" alt="img6"></img></div>
                    <div><img src={img7} height="300" width="300" alt="img7"></img></div>
                </Carousel>
            </div>
        </div>

    );
};

export default Home;