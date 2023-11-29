import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/javascript">JavaScript</Link>
      <Link href="/vocabulary">Vocabulary</Link>
      <Link href="/math">Math Facts</Link>
    </nav>
  )
}
