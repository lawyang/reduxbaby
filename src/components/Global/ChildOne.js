import React, { Component } from 'react';
import { connect } from 'react-redux';

//CSS
import '../../styles/childOne.css';

const mapStateToProps = state => ({
    childActive: state.mainReducer.user,
});

class ChildOne extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    componentDidMount(){
        console.log('childONE', this.props.childActive);
    
    }

    componentDidUpdate(){
        console.log('childONE did update', this.props.childActive);

    }

    render() {
        const childActive1 = this.props.childActive;
        return(
            <div className='childOne'>
                <h4>Child 1</h4>
                The user is {childActive1 ? 'TRUE' : 'FALSE'}

            </div>
        )
    }

}

export default connect(mapStateToProps)(ChildOne)