import React from 'react';
import {Btn} from './Button.elements'

 


const Button = ({name,onclick}) => {

    return <Btn onClick={onclick}>{name}</Btn>;
}

/* 
How to use this button 
import {Button} from './components';
<Button name="Abiel" onclick={handler}/>
*/
export default Button;