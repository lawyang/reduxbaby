import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import ChildOne from '../Global/ChildOne';
import ChildTwo from '../Global/ChildTwo';
import ChildThree from '../Global/ChildThree';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    userState: state.mainReducer.user
});

class Parent extends Component {
    constructor(props){
        super(props);
        this.state= {
            marvel: [
                { 
                    avengers: [
                        'captain america', 'the hulk', 'ironman', 'thor', 'spiderman', 'scarlett witch', 'blackwidow'
                    ],
                    xmen: [
                        'wolverine', 'professor x', 'cyclops', 'the beast', 'jean grey', 'storm', 'iceman'
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.ACTIVATE, payload: true
        });
        this.props.dispatch({
            type: USER_ACTIONS.ASSEMBLE, payload: this.state.marvel
        });
    }

    // When button is pressed active turns true
    // Action is sent to reducer
    // Value is stored in the store

    handleButton = () => {
        // if (this.props.type) {

        // }
        this.props.dispatch({
            type: USER_ACTIONS.ACTIVATE, payload: !this.props.userState
        })

        this.props.dispatch({
            type: USER_ACTIONS.CARTID, payload: 5
        })

    };



    render() {
        // debugger;
        return(
            <div>
                <h1>Hello World</h1>
                <h2>This is the Parent</h2>
                <h3><Link to='/home'>Take Me There</Link></h3>
                <button onClick={ ()=> this.handleButton() }>Press Me To Change Colors</button>
                <div >
                    <ChildOne />
                </div>
                <div className='ChildTwo'>
                    <ChildTwo />
                </div>
                <div className='ChildThree'>
                    <ChildThree />
                </div>
            </div>
        )
    }


}

export default connect(mapStateToProps)(Parent);