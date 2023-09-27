import styles from './page.module.css'
import Image from 'next/image'
import Logo from '../../public/img/logo.png'

// components
import NameCard from './components/NameCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Image 
          src={Logo} 
          alt="My Flashy Cards logo"
          priority={true}
        />
        <h2>Welcome to My Flashy Cards! An app to help you study</h2>
      </header>
      <section class="namecard">
        <div class="namecard-login">
            <p class="namecard-greeting">Hello, student!</p>
        </div>
        <NameCard />
      </section>
    </main>
  )
}
