import Image from 'next/image'
import Flip from '../../../public/img/flip.svg'
import Next from '../../../public/img/next.svg'

export default async function FlashCard() {
  return (
    <section className="flashcards">
        <div className="card">
            <div className="card-header"></div>
                <h1 className="card-title">Question Side of Card:</h1>
                <div id="content">
                    <h2>Text goes here.</h2>
                    <p>Hint goes here.
                        <a>Show hint button.</a>
                        {/* Toggle hint button, if clicked, show hint */}
                    </p>
                </div>
                <div className="card-flip-wrap">
                    <a href="undefined?side=undefined">
                        <Image className="card-flip" src={Flip} alt="Flip card" />
                    </a>
                </div>
                <div className="card-next">
                    <a href="/cards">
                        <Image src={Next} alt="Next card" />
                    </a>
                </div>
        </div>
        {/* <script src="/static/js/app.js"></script>  NEED TO ATTACH EVENT LISTENER TO BUTTONS */} 
    </section>
  )
}
