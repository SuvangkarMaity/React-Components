/* import React from 'react';

function counter(props) {
var count= 0;

//const handleIncrement = () => count++;
handleIncrement(() => {
    this.setState({
        count: this.state.count+1
    })
})

//const handleDecrement = () => count--;
handleIncrement(() => {
    this.setState({
        count: this.state.count-1
    })
})

//const handleReset = () => count = 0;
handleReset(() => {
    count = 0;
})

    return (
        <div>
            <h1>This is a Counter</h1>
            <p>Click on below button to see the change!!!</p>
            <h2>Value of count:</h2>
            <button onclick={this.handleIncrement()}>Incrementer:{this.state.count}</button>
            <button onclick={this.handleDecrement()}>Decrementer:{this.state.count}</button>
            <button onclick={this.handleReset()}>Reset:{this.state.count}</button>  

        </div>
    );
}

export default counter;

*/


import React, { Component } from 'react';

class Counter extends Component {

    constructor(){

        super()

        this.state={

            count:0

        }

    }

    handleIncrement=()=>{

        this.setState({

            count:this.state.count+1

        })

    }

     handleDecrement=()=>{

         this.setState({

            count:this.state.count-1

        })
 
    }
    

     handleReset=()=>{

        this.setState({

            count:0

        })

     }

     render() {

        return (

            <div>

                <h1>This is a Counter</h1>

                <p>Click on below button to see the change!!!!</p>

                <h2>value of count: {this.state.count}</h2>

                <button onClick={this.handleIncrement}>Incrementer</button>

                <button onClick={this.handleDecrement}>Decrementer</button>

                <button onClick={this.handleReset}>Reset</button>

            </div>

        );

    }    

}

export default Counter; 






