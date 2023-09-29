
export default function Welcome({ username, isSent }) {

  return (
    <p className="namecard-greeting">
      {isSent && username ? `Hello, ${username}!` : `Hello, student!`}
    </p>
  )
}
