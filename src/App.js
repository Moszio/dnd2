
import './App.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import CreateACharacter from './components/CreateACharacter';

function App() {
  // Usestate 
  // This syntax is called JSX = Javascript code 
  // returns a state variable and a function to update it


  const [screen, setScreen] = useState('main');
  
  return (
    <div>
      {
        screen === 'main' ? <MainMenu  setScreen={setScreen}/> : <CreateACharacter />
      }
    </div>
  );  
}



export default App;

