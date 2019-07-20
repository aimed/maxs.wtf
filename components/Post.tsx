import Page from './Page'

export default function Post({ children, title }: React.PropsWithChildren<{ title: string }>) {
  return (
    <Page title={title}>
      <h2 className="mt-10">{title}</h2>
      {children}
    </Page>
  )
}
