open Promise

@react.component
let make = (~id: string) => {
  let defaultArticle: Api.news = {
    id: "",
    title: "",
    cover: "",
    date: "",
  }

  let (article, setArticle) = React.Uncurried.useState(_ => defaultArticle)
  let (texts, setTexts) = React.Uncurried.useState(_ => [])

  React.useEffect1(() => {
    let _ = Api.getNewsById(id)->then(ret => {
      setArticle(. _p => ret)
      switch ret.transcript {
      | Some(v) => {
          let formatTexts = Util.parseText(v)
          setTexts(. _p => formatTexts)
        }

      | None => ()
      }

      resolve()
    })

    None
  }, [id])

  let textContent = Js.Array2.map(texts, txt => {
    let style = ReactDOM.Style.make(~color=txt.style.color, ~fontWeight=txt.style.fontWeight, ())
    <p key={Js.Int.toString(txt.idx)} className="my-2" style> {React.string(txt.value)} </p>
  })

  <div className="w-3/5 mx-auto pb-[100px]">
    <div>
      {React.array(textContent)}
      <p className="text-right">
        {React.string("from: ")}
        {switch article.source {
        | Some(href) =>
          <a href rel="noreferrer" target="_blank" className="text-blue-500 italic underline">
            {React.string("pbs")}
          </a>
        | None => React.string("")
        }}
      </p>
    </div>
    {switch article.src {
    | Some(src) => <audio controls={true} src className="fixed bottom-2 w-3/5 outline-none" />
    | None => React.string("")
    }}
  </div>
}
