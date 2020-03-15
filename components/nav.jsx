import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()

  return (
    <div className="container mx-auto mb-4 bg-white rounded-b shadow">
      <nav className="max-w-sm mx-auto">
        <ul className="flex items-center justify-around py-4">
          <li>
            <Link href="/">
              <a
                className={
                  router.pathname === '/'
                    ? 'text-blue-500 no-underline'
                    : 'text-gray-600 no-underline'
                }
              >
                Status
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={
                  router.pathname === '/about'
                    ? 'text-blue-500 no-underline'
                    : 'text-gray-600 no-underline'
                }
              >
                Info
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
