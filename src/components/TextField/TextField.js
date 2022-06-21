import React from 'react';
import {TxtFld} from './TextField.elements'

 


const TextField = ({name,onchange}) => {

    return <TxtFld onChange={onchange} placeholder={name}/>
}

/* 
How to use this TextField 
import {TextField} from './components';
<TextField />
*/
export default TextField;