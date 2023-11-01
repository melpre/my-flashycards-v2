import Close from '../../../public/img/close.svg'
import Image from 'next/image'

export default function Welcome({ username, isSent }) {

  return (
    <section className="namecard-login">
      {isSent && username ? 
        <>
          <p className="namecard-greeting">Hello, {username}!</p>
          <form className="namecard-exit" action="/goodbye" method="POST">
            <button type="submit">
              <Image 
                src={Close}
                alt="Close button"
              />
            </button>
          </form>
        </>
        : 
        <p>Hello, student!</p>}
    </section>
  )
}
