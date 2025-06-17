/* import react from 'react';

function Demo(){
    let val = '';
    for(let i=0; i< 10; i++){
        val+= i+' ';  //val=val+i+' ';
       
        
    } 

    return(
        <>
         <h3> This is a Functional Component!!! </h3>
         <p>Now a days MERN stack is mostly used as UI development</p>
         <p>value of {val}</p>
        
        </>
    )
}
export default Demo;   */


 /* import react from 'react';

 function Demo(props){
   

   /* return(
        <>
         <h3> This is a Functional Component!!! </h3>
         <div>JSX Expression: syntax
         <h3>Sum of 100, 200 and 300 is {100+200+300}</h3>
         </div>
         <p>Now a days {props.tech} is mostly used as UI development</p>
        
        </>
    ) */


    /*return( 
        //JSX Fragment
        <>
        <div>
            this is first div
        </div>

        <div>
            this is second div
        </div>

        </> 
    ) */

  /* var num = 50;
  var str = 'invalid'
  if(num<100){
    str= 'valid'
  } */

/*
  var num = 25;
  if(num<100){
    var str = 'valid'
  }
  else{
      str = 'invalid'
  }

  return(
    // JSX Fragment
    <> 
    <h1> Value of num is: {str}</h1>
    <div>
      <h3>Conditional rendering by Ternary operator: {(num)>100? 'valid' : 'invalid'}</h3>
    </div>
    </>

  )
}  
export default Demo; */


import React from 'react';
import CarData from './CarData';

function FunctionComponent(props) {

  const obj ={
    product_name: "Indigo",
    title: "Aerosmace",
    ticket: "15000 rs"
  }
  
  return (
    <div>
       <CarData data="cardata"  obj = {obj}/>
    </div>
  );
}

export default FunctionComponent; 


  