// TODO
  // Figure out how to flip the card, rather than toggle display of text

'use client'

import React, {useState} from 'react'

import Image from 'next/image'
import Flip from '../../../public/img/flip.svg'
import Next from '../../../public/img/next.svg'


export default function RandomCardQuestion(props) {
  const [hint, showHint] = useState(false);
  const [side, flipSide] = useState(false);

  function handleHint() {
    showHint(true);
  }

  function handleFlip() {
    flipSide(true);
  }

  return (
    <>
      <section className="flashcards">
        <div className={`card ${!side ? 'card-question' : 'card-answer'}`}>
          <div className="card-header"></div>
          <h1 className="card-title">
            {
            !side ? 'Question:' : 'Answer:'
            }
          </h1>
          <div id="content">
            <h2>{!side ? props.data.question : props.data.answer}</h2>
            {!hint ? (
              <button onClick={handleHint}>Show hint</button>
            ) : (
              <p>{props.data.hint}</p>
            )}
            {/* Using the card-flip-wrap class blocks 'Show Hint' click event listener for some reason...*/}
            {/* <div className="card-flip-wrap"> */}
              <button onClick={handleFlip}>
                <Image className="card-flip" src={Flip} alt="Flip card"/>
              </button>
            {/* </div> */}
          </div>
          <div className="card-next">
              <a href="/cards">
                <Image src={Next} alt="Next card"/>
              </a>
          </div>
        </div>
      </section>
    </>
  )
}
