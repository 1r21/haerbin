@react.component
let make = (~news: Api.news) => {
  let goDetail = _evt => {
    RescriptReactRouter.push(`/detail/${news.id}`)
  }

  <span className="inline-block w-full" onClick={goDetail}>
    <div className="h-28 rounded overflow-hidden bg-gray-300 group">
      <img
        src={news.cover}
        className="block w-full h-full text-white bg-gray-300 transition-transform duration-1000 group-hover:rotate-[5deg] group-hover:scale-110"
        alt="Fetch cover err"
      />
    </div>
    <p className="text-xs my-2"> {React.string(news.date)} </p>
    <p className="line-clamp-3 text-sm" title={news.title}> {React.string(news.title)} </p>
  </span>
}
