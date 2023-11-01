import React from 'react'

export default function Question(props) {
  return (
    <>
        <h1 className="card-title">Question:</h1>
        <div id="content">
          <h2>{props.data.question}</h2>
          <p>{props.data.hint}
              <a>Show hint</a>
              {/* Toggle hint button, if clicked, show hint */}
          </p>
        </div>
    </>
  )
}
