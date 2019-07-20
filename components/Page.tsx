import '../styles/base.css'
import Head from 'next/head'
import Nav from './Nav'

export default function Page({ children, title }: React.PropsWithChildren<{ title: string }>) {
  return (
    <main className="max-w-xl m-auto">
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
    </main>
  )
}
