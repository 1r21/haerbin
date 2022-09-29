type news = {
  id: string,
  title: string,
  cover: string,
  date: string,
  src?: string,
  source?: string,
  transcript?: string,
}

@module("@1r21/api-h5")
external getNews: unit => Js.Promise.t<{"list": array<news>}> = "getNews"
@module("@1r21/api-h5")
external getNewsById: string => Js.Promise.t<news> = "getNewsById"
