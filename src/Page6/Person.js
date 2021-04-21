import React, { Fragment } from 'react';
import './Person.css'
//import { render } from 'react-dom';

const Person = (props) => {
    return (
    <div className='Person'>
    
    <h4>{props.name}</h4>
   
    </div>
    )

}

export default Person