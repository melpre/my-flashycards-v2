'use client'

import React, {useState} from 'react'

export default function Question(props) {
  const [hint, showHint] = useState(false);

  function handleClick(event) {
    event.stopPropagation();
    showHint(true);
  }

  return (
    <>
        <h1 className="card-title">Question:</h1>
        <div id="content">
          <h2>{props.data.question}</h2>
          {!hint ? (
            <button onClick={handleClick}>Show hint</button>
          ) : (
            <p>{props.data.hint}</p>
          )}
        </div>
    </>
  )
}

