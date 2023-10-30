import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const HelloWorld = () => {
  return (
      <div>
          <h1 style={{ color: 'red' }}>Hello World !</h1>
      </div>
  );
};

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
     <div className='counter-container'>
      <h3>Count: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
     </div>
  );
}

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

function NameForm() {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const displayStyle = {
    color: selectedColor,
    textTransform: 'uppercase',
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
      <p style={{color : selectedColor}}>{name}</p>

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

