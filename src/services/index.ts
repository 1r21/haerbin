import request from "../utils/request";

export type News = {
  id?: number;
  title: string;
  src: string;
  cover: string;
  source: string;
  transcript: string;
  date: string;
};

export type Translation = {
  src: string;
  dst: string;
};

export async function getNews() {
  return request.get<null, { list: News[] }>("/news");
}

export async function getNewsById(id: string) {
  return request.post<null, News>("/news/detail", {
    id,
  });
}

export async function translate(q: string) {
  return request.post<null, { list: Translation[] | null }>("/translate", {
    q,
  });
}
