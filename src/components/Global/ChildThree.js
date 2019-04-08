import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/childThree.css';


const mapStateToProps = state => ({
    superHeroes: state.mainReducer.avengers[0],
    activateHero: state.mainReducer.user,

});

class ChildThree extends Component {

    componentDidMount(){

    };

    renderIfElse = () => {
        // if (this.props.activateHero.length === 0) {
        //     return this.props.superHeroes.map((hero, index) => {
        //         console.log('heroes', hero)
        //         return <div>help</div>
        //     })
        // }
    }

    render() {
        console.log('heroes of marvel', this.props.superHeroes)

        return(
            <div className="childThree">
                <h2>Conditional Renderings</h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>if/else w/ .map</h3>
                {this.renderIfElse()}

            </div>
        )
    }

}

export default connect(mapStateToProps)(ChildThree);