import Head from 'next/head'

export default function DefaultLayout({ children }) {
  return (
    <>
      {/* <Head>
        <title>{children.seo.title || children.title || 'Adway Showcase'}</title>
        <meta name="description" content={children.seo.description || 'Adway Showcase'} />
        <meta name="keywords" content={children.seo.description || 'Adway Showcase'} />
      </Head> */}
      <main>
        {children}
      </main>
    </>
  )
}
