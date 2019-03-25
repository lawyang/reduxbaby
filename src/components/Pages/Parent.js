import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChildOne from '../Global/ChildOne';
import ChildTwo from '../Global/ChildTwo';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    userState: state.mainReducer.user
});

class Parent extends Component {
    constructor(props){
        super(props);
        this.state= {

        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.ACTIVATE, payload: true
        })

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

    // makeChange = () => {
    //     this.props.dispatch({
    //         type: USER_ACTIONS.ACTIVATE, payload: this.state.active
    //     })
    // }


    render() {
        // debugger;
        console.log('dispatching on did mount', this.props.userState)

        return(
            <div>
                <h1>Hello World</h1>
                <h2>This is the Parent</h2>
                <button onClick={ ()=> this.handleButton() }>Press Me To Change Colors</button>
                <div >
                    <ChildOne />
                </div>
                <div className='ChildTwo'>
                    <ChildTwo />
                </div>
            </div>
        )
    }


}

export default connect(mapStateToProps)(Parent);