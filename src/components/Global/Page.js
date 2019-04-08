import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/page.css';

const mapStateToProps = state => ({

});

class HomePage extends Component {


    render(){
        return(
            <div className="grid-container">
                <div className="video"> 
                    <div class="videoA"></div>
                    <div class="VideoB">
                        <div>
                            <iframe  
                                title='RapidInterfaceVideo'
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/pomtDuQjZM4" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen="allowfullscreen">
                            </iframe>
                        </div>
                    </div>
                    <div class="VideoC"></div>
                </div>
                <div className="logo">Logo</div>
                <div className="featuredProductsChevron">Featured Products Chevron</div>
                <div className="productCards">
                    <div className="goKeypad">Go Keypad icon</div>
                    <div className="faceplates">Faceplates icon</div>
                    <div className="decalSheets">decal sheets icon</div>
                </div>
                <div className="processChevron">Process Chevron</div>
                <div className="processCards">
                    <div className="download">downloads icon</div>
                    <div className="design">design icon</div>
                    <div className="upload">upload icon</div>
                    <div className="sendTo">send to icon</div>
                </div>
                <div className="footerText">
                    <div className="nameLocation">RapidInterface | Minneapolis, MN</div>
                    <div className="footerIcons">Footer Icons</div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomePage);