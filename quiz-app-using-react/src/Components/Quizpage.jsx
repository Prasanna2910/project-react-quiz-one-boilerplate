import React from 'react';
import './HomePage.css';

function Quiz() {
  return (
    <div className="quizpg">
      <div className="maindiv">
        <h2>Question</h2>
        <p>Which is the only mammal that can jump?</p>
        <div className="btnsdiv">
          <button className="btn1">Dog</button>
          <button className="btn2">Elephant</button>
          <button className="btn3">Goat</button>
          <button className="btn4">Lion</button>
        </div>
        <div className="Finalbtns">
          <button className='Preview'>Previous</button>
          <button className='Next'>Next</button>
          <button className='Quit'>Quit</button>
        </div>
      </div>
    </div>
  );
}
export default Quiz;
