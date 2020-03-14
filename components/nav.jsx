import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="max-w-md mx-auto">
      <ul className="flex items-center justify-center gap-3 py-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Status</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-blue-500 no-underline">Info</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
