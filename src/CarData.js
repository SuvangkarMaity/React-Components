import React from 'react';
import './carData.css'

function CarData(props) {

    const style={
        backgroundcolor:'brown',
        color:'white',
        padding: 2 
    }   
    console.log(props)

    return (
        <div>
            <h1 style={style}>Welcome to car info</h1>
            <h3 style={style}>Name of car:{props.obj.product_name}</h3>
        </div>
    );
}

export default CarData;