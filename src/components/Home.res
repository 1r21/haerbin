open Promise

@react.component
let make = () => {
  let (articles, setArticles) = React.Uncurried.useState(_ => [])

  React.useEffect0(() => {
    let _ = Api.getNews()->then(ret => {
      setArticles(. _ => ret["list"])
      resolve()
    })

    None
  })

  let articleContent = Js.Array2.map(articles, item =>
    <li className="w-1/5 p-2" key={item.id}>
      <Article news={item} />
    </li>
  )

  <div className="w-9/12 h-full mx-auto">
    <ul className="flex flex-wrap"> {React.array(articleContent)} </ul>
  </div>
}
