import Card from './Card.js';
import Welcome from '../components/Welcome.js'

import { promises as fs } from 'fs';

export default async function CardsPage() {
  const file = await fs.readFile(process.cwd() + '/src/app/flashcardData.json', 'utf8');
  const data = JSON.parse(file);
  const flashCards = data.cards.javascript;
  const id = Math.floor( Math.random() * flashCards.length );
  const randomCard = flashCards[id];
  console.log(randomCard);

  return (
    <section className='namecard'>
      <Welcome />
      <Card data={ randomCard }/>
    </section>
  )

}




