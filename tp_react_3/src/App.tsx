import { useCallback, useState } from 'react';
import {Dice} from './dice.tsx';

function App() {
  const [value, setValue] = useState (0);
  
  const handleRoll = useCallback(
    (newValue: number) => {
      setValue(newValue)
    }, 
    [])

return (
  <>
  <Dice onRoll={handleRoll} />
  <p>{value}</p>
  </>
)
}

export default App;