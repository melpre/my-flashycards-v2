// import { promises as fs } from 'fs';

import Card from './Card.js';

export default async function CardsPage() {
  // const file = await fs.readFile(process.cwd() + '/src/app/flashcardData.json', 'utf8');
  // const cards = JSON.parse(file);
  // console.log(cards.cards[0].question);

  return (
    <Card />
  )
}




