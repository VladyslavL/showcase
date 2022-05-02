import DefaultLayout from "./Default";


export default function PageLayout({ page }) {
  return (
    <>
      <DefaultLayout>
        <div dangerouslySetInnerHTML={{ __html: page.content_html }} />

        {
          page.lists_of_images.map((list, i) => (
            <div key={i}>
              <img src={list.row[0].image} alt="" />
              <p>{list.row[0].image}</p>
            </div>
          ))
        }
      </DefaultLayout>
    </>
  )
}
