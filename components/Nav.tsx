import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="mt-1 mb-2 flex flex-row justify-between">
      <Link href="/">
        <a className="no-underline">
          <h1 className="text-lg">max's wtf</h1>
        </a>
      </Link>
      <div>
        <Link href="/">
          <a className="mr-2 no-underline">About me</a>
        </Link>
        <a className="mr-2 no-underline" href="mailto:maximilian.taeschner@gmail.com">
          Contact
        </a>
      </div>
    </nav>
  )
}
