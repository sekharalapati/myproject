import React, { useState } from 'react';
import { primaryButton } from './style.js';
const Button3 =(props)=> {
    // const [title]  = useState ('Click Here');
    const [title, setTitle]  = useState ('Click Here');
    // const handleclick =() =>{
    //     alert("Success");
    // }
    return (
        <div>
        {/* <button style={primaryButton} onClick={handleclick}>{title}</button> */}
        <button style={primaryButton} onClick={()=>setTitle('Success')}>{title}</button>
        </div>
    );
}
export default Button3;