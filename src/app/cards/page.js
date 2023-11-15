import Card from './Card.js';

import { promises as fs } from 'fs';

export default async function CardsPage() {
  const file = await fs.readFile(process.cwd() + '/src/app/flashcardData.json', 'utf8');
  const data = JSON.parse(file);
  const cards = data.cards;
  const id = Math.floor( Math.random() * cards.length );
  const randomCard = cards[id];
  console.log(randomCard);

  return (
    <Card data={ randomCard }/>
  )

}




