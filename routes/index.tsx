import { Handlers, PageProps } from "$fresh/server.ts";
import Article, { type News } from "../components/Article.tsx";

const API_HOST = Deno.env.get("API_HOST");


export const handler: Handlers<News[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`${API_HOST}/api/news`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const result = await resp.json();
    const { data } = result;
    const { list } = data;
    return ctx.render(list);
  },
};

export default function Home({ data }: PageProps<News[]>) {
  return (
    <div className="w-9/12 h-full mx-auto">
      <ul className="flex flex-wrap">
        {data.map((item) => (
          <li className="w-1/5 p-2" key={item.id}>
            <Article {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
