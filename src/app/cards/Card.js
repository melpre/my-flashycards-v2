// To-do:
  // fetch random flashcard data
  // display random flashcard data

import Image from 'next/image'
import Flip from '../../../public/img/flip.svg'
import Next from '../../../public/img/next.svg'
import Question from './Question.js'

import { promises as fs } from 'fs';

export default async function RandomCardQuestion() {
  const file = await fs.readFile(process.cwd() + '/src/app/flashcardData.json', 'utf8');
  const data = JSON.parse(file);
  const cards = data.cards;
  const id = Math.floor( Math.random() * cards.length );
  const randomCard = cards[id];
  console.log(randomCard);

  return (
    <>
      <section className="flashcards">
        <div className="card">
            <div className="card-header"></div>
              <Question data = { randomCard }/>
                <div className="card-flip-wrap">
                    <a href="undefined?side=undefined">
                        <Image className="card-flip" src={Flip} alt="Flip card"/>
                    </a>
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
