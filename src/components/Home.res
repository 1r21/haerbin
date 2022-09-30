open Promise

@react.component
let make = () => {
  let (loading, setLoading) = React.Uncurried.useState(_ => false)
  let (articles, setArticles) = React.Uncurried.useState(_ => [])

  React.useEffect0(() => {
    setLoading(._p => true)
    Api.getNews()
    ->then(ret => {
      setArticles(. _ => ret["list"])
      setLoading(. _p => false)
      resolve()
    })
    ->catch(err => {
      Js.log(err)
      setLoading(. _p => false)
      resolve()
    })
    ->ignore

    None
  })

  let articleContent = Js.Array2.map(articles, item =>
    <li className="w-1/5 p-2" key={item.id}>
      <Article news={item} />
    </li>
  )

  <div className="w-9/12 h-full mx-auto">
    {switch loading {
    | false => <ul className="flex flex-wrap"> {React.array(articleContent)} </ul>
    | true => <Loading delay=300 />
    }}
  </div>
}
