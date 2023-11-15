export default function Form({ username, setUsername, setIsSent, toggle, setToggle }) {

  function handleSubmit(event) {
    event.preventDefault()
    setIsSent(true)
    setToggle(false)
  }

  return (
    <>
      {toggle && (
        <form className="namecard-form" onSubmit={handleSubmit}>
          <label className="namecard-prompt">Please enter your name:
            <input
              required
              name="username" 
              className="namecard-name" 
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
          <button className="namecard-submit" type="submit">Submit</button>
        </form>
      )}
    </>
  )
}
