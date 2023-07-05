import Game from "./Javascript/Game.jsx"
import { useState } from "react"

function App() {
let [textInput, setTextInput] = useState("");
let [newMapped, setNewMapped] = useState("");
const handleInputChange = (event) => {
  setTextInput(event.target.value);
};
const handleButtonClick = () => {
let textArray =textInput.split(" ")

let newMapped = Array.from(textArray.map((currValue)=>{
return currValue + "🤸‍♀️"


})).join("")
 setNewMapped(newMapped)
};
  return (
    <><div className="main-container">

  <section className="main-page">
    <div className="title-container">
    <p>Beshie Generator</p>
    </div>
  <Game/>
  </section>

  {/*2 classes */}
  <section className="Beshy-container">
    <div className="upper-container">
    <div className="image-container">
      <img src="src/assets/cartwheel.png" alt="cartwheel Beshy" />
    </div>
      <div className="input-container">
        <label htmlFor="textInput">Input: </label>
        <input
        type="text" 
        id="textInput" 
        name="textInput" 
        value={textInput} 
        onChange={handleInputChange} 
        className="txtEnter" />

        <button className="btnENter" onClick={handleButtonClick}> Submit </button>
          
      </div>
      </div>

<div className="show-text-container">
<div className="text">
  {newMapped}
</div>

</div>

  </section>
</div>
    </>
  )
}

export default App
