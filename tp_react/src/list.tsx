import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState } from 'react';

function List() {
    const names = ["Thomas", "Yoann", "Aly", "Jeremy"];
  
    const listItems = names.map((name, index) => (
      <li key={index} style={{ color: index % 2 === 0 ? 'navy' : 'black' }}>
        {name}
      </li>
    ));
  
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  export default List;