import DefaultLayout from "./Default";
import Image from 'next/image'



export default function PageLayout({ page }) {
  return (
    <>
      <DefaultLayout>
        <div dangerouslySetInnerHTML={{ __html: page.content_html }} />

        {
          page.lists_of_images.map((list, i) => (
            <div key={i}>
              <Image src={list.row[0].image} />
              <p>{list.row[0].image}</p>
            </div>
          ))
        }
      </DefaultLayout>
    </>
  )
}
