import Game from "./Javascript/Game.jsx"

function App() {
  return (
    <>
<div className="main-container">

  <section className="main-page">
    <div className="title-container">
    Game Wow
    </div>
  <Game/>
  </section>

  {/*2 classes */}
  <section className="Beshy-container">
    
 <div className="input-container">
  <label htmlFor="textInput">Input: </label>
  <input type="text" id="textInput" name="textInput" />
 </div>

<div className="show-text-container">
<div className="text">

</div>

</div>

  </section>
</div>
    </>
  )
}

export default App
