import PageLayout from "../components/layouts/Page";
import { getCollectionSlugs, getCollectionItem } from "../lib/collections";

export default function Page({ page }) {
  return (
    <PageLayout page={page} />
  )
}

export async function getStaticPaths() {
  const slug = await getCollectionSlugs('pages');

  return {
    paths: slug.filter(({ params }) => params.slug),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = await getCollectionItem('pages', params.slug)

  return {
    props: {
      page: JSON.parse(JSON.stringify(page))
    }
  }
}