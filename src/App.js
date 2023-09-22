import { useState } from 'react';
import './App.css';
import ToolPit from './component/Tooltip';


function App() {
  const [selectedButton, setSelectedButton] = useState('top');
  const [position, setPosition] = useState('top');
  function handleButtonClick(event) {
    setPosition(prevPostion => {
      return prevPostion = event.target.value;
    })
    setSelectedButton(event.target.value);
  }
  return (
    <div className="container">
      <h1>React Tooltip</h1>
      <h2>Hover over the Button and see the direction of ToolTip in the right left up and down.</h2>
      {/* set the position of the tooltip */}
      <div className='button-container'>
        <button onClick={handleButtonClick} value="left" className={selectedButton === "left" ? "selecte" : ""}>Left</button>
        <button onClick={handleButtonClick} value="right" className={selectedButton === "right" ? "selecte" : ""}>Right</button>
        <button onClick={handleButtonClick} value="Up" className={selectedButton === "Up" ? "selecte" : ""}>Up</button>
        <button onClick={handleButtonClick} value="Down" className={selectedButton === "Down" ? "selecte" : ""}>Down</button>
      </div>
      {/* when hovered over this button the tip will be displayed */}
      <ToolPit position={position} />
    </div>
  );
}

export default App;

