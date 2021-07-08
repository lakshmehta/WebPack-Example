import React from 'react'
import { useContext } from 'react';
import { FirstName, LastName } from '../../App.js';

export default function CompC() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  
    return (   
        <div>
             <h2>{fname} {lname}</h2>
      </div>
        
    )
}