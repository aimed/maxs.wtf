import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="mt-1 mb-2">
      <Link href="/">
        <a>
          <h1 className="text-base">max's wtf</h1>
        </a>
      </Link>
    </nav>
  )
}
