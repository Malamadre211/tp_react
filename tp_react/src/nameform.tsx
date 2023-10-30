import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState } from 'react';

function NameForm() {
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState('black');
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedColor(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="name">Prenom : </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <p style={{color : selectedColor, textTransform: 'uppercase'}}>{name}</p>
  
        <label htmlFor="color">Couleur : </label>
        <input
          type="color"
          id="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </div>
    );
  }
  
  export default NameForm;