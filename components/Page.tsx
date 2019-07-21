import '../styles/base.css'
import Head from 'next/head'
import Nav from './Nav'

export default function Page({ children, title }: React.PropsWithChildren<{ title: string }>) {
  return (
    <main className="max-w-xl m-auto">
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Nav />
      {children}
    </main>
  )
}
