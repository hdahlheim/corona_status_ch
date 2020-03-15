import Nav from '../components/nav'
import Head from 'next/head'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Head>
        <title>Info</title>
      </Head>
      <Nav />
      <div className="max-w-xl p-8 mx-auto bg-white rounded-md shadow">
        <h1 className="mb-2 text-2xl font-bold">
          Corona Infektionen in der Schweiz und Umgebung.
        </h1>
        <p className="mb-2 text-gray-800">
          Die Daten von dieser Seite stammen von der{' '}
          <a
            className="text-blue-400"
            href="https://github.com/mathdroid/covid19"
          >
            Corvid19 API
          </a>
          .
        </p>
        <p className="mb-2 text-gray-800">
          Die API verwendet den Datensatz von John Hopkins University CSSE.
        </p>
      </div>
    </div>
  )
}
