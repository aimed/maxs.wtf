import Page from '../components/Page'

export default function Index() {
  return (
    <Page title="max's wtf">
      <section className="p-2 mt-10 mb-5 relative">
        <img src={require('../static/max.png')} alt="Max" className="w-24 absolute right-0 mr-2 bottom-0 -mb-6" />
        <h2 className="pb-0">Hi. I'm Max.</h2>
        <p>Software Engineer / guy on the internet.</p>
        <p>This is a collection of random thoughts.</p>
        <div className="bg-green-200 absolute top-0 bottom-0 w-screen" style={{ zIndex: -1 }} />
      </section>
    </Page>
  )
}
