import React,{Component} from 'react';
import Square from './Square'
import './App.css';
import WinSound from './Treasure.mp3' ;


class Board extends Component {
    constructor(props){
        super(props)

        this.state={
            spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            bomb_index: lose,
            tressure_index: win,
            sound: false


        }
        var win = Math.floor(Math.random()*this.state.spaces.length)
        this.state.tressure_index = win;
        var lose = Math.floor(Math.random()*this.state.spaces.length)
        this.state.bomb_index = lose;


    }

    displayOnBoard=(index,value)=>{
        console.log("in board",index,value);
        const { spaces } = this.state
        spaces[index] = value
        this.setState({spaces:spaces})
    }
    
    boxClick=(index)=>{
        console.log(index);
        if (index===this.state.bomb_index) {
            this.displayOnBoard(index,'💀')
            alert('You Lose')
            // this.setState({spaces:[0, 0, 0, 0, 0, 0, 0, 0, 0]})

        }else if (index===this.state.tressure_index) {

            console.log(index);
            this.displayOnBoard(index,'🏆')
            alert('You Win')

            // this.setState({spaces:[0, 0, 0, 0, 0, 0, 0, 0, 0]})



        } else{
            this.displayOnBoard(index,'❌')
        }
    }

    restart=()=>{
        window.location.reload(false)
    }
    render(){

        return (
            <div className="Board">

                <div id="flexbox" >
                    {this.state.spaces.map((value,index)=>{
                        return(
                            <div>
                                <Square index={index} value={value} displayOnBoard={this.displayOnBoard}
                                boxClick={this.boxClick}/>
                            </div>
                        )
                    })}
                </div>
                <button id="reset" onClick= {this.restart} > Restart </button>

            </div>
        );
    }
}
export default Board;
