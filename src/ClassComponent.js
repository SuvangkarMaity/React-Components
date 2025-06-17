
//Boylar-structure of class components

 import React, { Component } from 'react'
 import './ClassComponent.css'
 
 class ClassComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Amit',
            domain: 'WEB DEVELOPER',
            res:this.props.id
        }
        //console.log("before update props value:", this.state.res) 
        this.handleClick = this.handleClick.bind(this)
        //console.log("Current value:", this.state.domain) 
    }

    handleClick(){  
        this.setState( 
            {domain:'MERN STACK DEVELOPER',
               res: 10 }
   
        )

        //console.log("update value:", this.state.domain) 
        //console.log("afer updating props value:", this.props.id)
        //console.log("Updated value:", this.setState.domain)
    }

    render() {
       
        return (
            <div className='component'>
                <h1>{this.state.res}.This is a {this.props.comp}</h1>
                <p>My name is {this.state.name} and I am a {this.state.domain}</p>
                <button onClick={this.handleClick}>Update value!!</button>    
            </div>
        );
    }
} 
 
 export default ClassComponent;