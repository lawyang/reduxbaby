import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/childTwo.css';

const mapStateToProps = state => ({
    childTwoActive: state.mainReducer.user,
    cartID: state.mainReducer.cart
});

class ChildTwo extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    render() {
        // debugger;
        console.log(this.props.childTwoActive)
        debugger;
        console.log('CART ID', this.props.cartID)
        return(
            <div className='childTwo'>
                <h4>Child 2</h4>

                {this.props.childTwoActive === true && 
                    <h1>
                        hello true
                    </h1>
                }

                <h1>{this.props.cartID}</h1>


            </div>
        )
    }

}

export default connect(mapStateToProps)(ChildTwo)