import React, { Component } from 'react';

class IncrementCounter extends Component {

    /*  constructor(){
        super();
        this.state ={
            count:0
        };

        // console.log("previous value of count is:, this.state.count)
      }

      handleIncrement(){
           this.setState({
            count: this.state.count+1
           })
           console.log("Updated value:", this.state.count)
      }

      render() {
        return (
             <div>
                <h1>Increment counter program</h1>
                <h2>Current value: {this.state.count}</h2>
                <h3>Click on below button to update the count</h3>
                <button onClick= {()=>this.handleIncrement()}>Update Count </button> <label>{this.state.count}</label>
                 </div > 
             </div > 
             
        );
    }       */



     /*   constructor(){
            super();
            this.state ={
                preVal:0,
                count:0
            };
    
            // console.log("previous value of count is:, this.state.preVal)
          }
    
          handleIncrement(){
               this.setState({
                preVal: this.state.count,
                count: this.state.count+1
               })
               console.log("Updated value:", this.state.count)
          }
    
          render() {
            return (
                 <div>
                    <h1>Increment counter program</h1>
                    <h2>Current value: {this.state.preVal}</h2>
                    <h3>Click on below button to update the count</h3>
                    
                    <button onClick= {()=>this.handleIncrement()}>Update Count </button>  <label>{this.state.preVal}</label>
                 </div > 
                 </div > 
                 
            );
        }       
    
        */

      /*  constructor(){
            super();
            this.state ={
                count:0
            };
    
            // console.log("previous value of count is:, this.state)
          }
    
          handleIncrement = () => {
               this.setState((prevState) => {

                console.log("previous value:", prevState.count);
                return { count: prevState.count +1}
               })
              // console.log("Updated value:", this.state.count)
          }

          render() {
            return (
                 <div>
                    <h1>Increment counter program</h1>
                    <h2>Current value: {this.state.count}</h2>
                    <h3>Click on below button to update the count</h3>
                    
                    <button onClick= {()=>this.handleIncrement()}>Update Count </button>  <label>{this.state.count}</label>
                 </div > 
                 
            );
        }        */
       
    
  /*  handle = () => {

        this.setState((prevState) => {
    
          console.log("Previous Value:", prevState.count);
    
          return { count: prevState.count + 1 };
    
        });
    
      };

    render() {
        return (
            <div>
                <h1> Increment counter program</h1>
                <h2>Current value: {this.state.count}</h2>
                <h3>Click on below button to update the count</h3>
                <button onClick = {this.handle}>Increment</button>
            </div>
        );
    }

    */
}

export default IncrementCounter;  
