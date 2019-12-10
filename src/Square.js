import React,{Component} from 'react';

import './App.css';

class Square extends Component {



    handleClick=() =>{
        console.log(this.props.value);
        this.props.boxClick(this.props.index);
    }

    render(){

        return (
            <div className="Square">
                <div id='square'>

                <button onClick={this.handleClick}>
                    { !(this.props.value)
                        && '❓'
                    }
                    { (this.props.value !== 0 )
                        && this.props.value
                    }
                </button>
                </div>

            </div>
        );
    }
}
export default Square;
