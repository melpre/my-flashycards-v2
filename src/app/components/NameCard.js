import React from 'react'

export default function NameCard() {
  return (  
    <form className="namecard-form" action="/hello" method="post">
        <label className="namecard-prompt">Please enter your name:
            <input className="namecard-name" type="text" name="username" />
        </label>
        <button className="namecard-submit" type="submit">Submit</button>
    </form>
  )
}
