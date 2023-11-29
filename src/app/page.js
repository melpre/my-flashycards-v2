'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Logo from '../../public/img/logo.png'

// components
import Welcome from './components/Welcome'
import Form from './components/Form'


export default function HomePage() {
  const [username, setUsername] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [toggle, setToggle] = useState(true)

  return (
    <main className={styles.main}>
      <header>
        <Image 
          src={Logo} 
          alt='My Flashy Cards logo'
          priority={true}
          quality={100}       // ensures image quality is 100%
          placeholder='blur'  // while image loads 
        />
        <h2>An app to help you study</h2>
      </header>
      <section className='namecard'>
        <Welcome 
          username={username} 
          isSent={isSent} 
        />
        <Form 
          username={username} 
          setUsername={setUsername} 
          setIsSent={setIsSent}
          toggle={toggle}
          setToggle={setToggle}
        />
        <>
          {!toggle && (
            <div>
              <h1 className="namecard-prompt">Let&apos;s get started!</h1>
              <a className="namecard-submit" href="/javascript">Begin!</a>
            </div>
          )}
        </>
      </section>
    </main>
  )
}
