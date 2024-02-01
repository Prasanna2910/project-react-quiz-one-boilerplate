import React from 'react';
import './HomePage.css';

function Final() {
  return (
    <div className="final">
      <h4
        style={{
          color: 'yellow',
          position: 'absolute',
          top: '-8px',
          left: '530px',
        }}
      >
        Result
      </h4>
      <div className="main">
        <h5>You need more practice!</h5>
        <h2
          style={{
            color: 'Blue',
          }}
        >
          Your score is 20%
        </h2>
        <div className="line1">
          <p>Total number of questions</p>
          <p>15</p>
        </div>
        <div className="line2">
          <p>Number of attempted questions</p>
          <p>9</p>
        </div>
        <div className="line3">
          <p>Number of correct answers</p>
          <p>3</p>
        </div>
        <div className="line4">
          <p>Number of wrong answers</p>
          <p>6</p>
        </div>
      </div>
      <button
        style={{
          color: 'rgb(85, 31, 162)',
          position: 'absolute',
          top: '380px',
          left: '460px',
        }}
      >
        Play Again
      </button>
      <button
        style={{
          color: 'green',
          position: 'absolute',
          top: '380px',
          left: '590px',
        }}
      >
        Back to home
      </button>
    </div>
  );
}
export default Final;
