import Link from 'next/link'
import Page from '../components/Page'

export default function Index() {
  return (
    <Page title="max's wtf">
      <section className="p-2 mt-5 mb-5 relative overflow-x-hidden">
        <h2>Hi. I'm Max.</h2>
        <p>This is a collection of random thoughts.</p>
        <div className="bg-gray-200 absolute top-0 bottom-0 w-screen" style={{ zIndex: -1 }} />
      </section>
      <h6>Posts:</h6>
      <Link href="/posts/2019-07-20-graph-databases-for-access-control">
        <a>Graph databases for access control</a>
      </Link>
    </Page>
  )
}
