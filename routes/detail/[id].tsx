import { Handlers, PageProps } from "$fresh/server.ts";
import { type News } from "../../components/Article.tsx";
const API_HOST = Deno.env.get("API_HOST");

export const handler: Handlers<News | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;

    const resp = await fetch(`${API_HOST}/api/news/detail`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const result = await resp.json();
    const { data } = result;
    return ctx.render(data);
  },
};

export default function Detail(props: PageProps<News>) {
  const { data: article } = props;
  return (
    <div className="w-3/5 mx-auto pb-[100px]">
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: article?.transcript ?? "Not prepare yet.",
          }}
        ></p>
        <p className="text-right">
          from:
          <a
            href={article?.source}
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 italic underline"
          >
            pbs
          </a>
        </p>
      </div>
      {article?.source && (
        <audio
          controls
          src={article.src}
          className="fixed bottom-2 w-3/5 outline-none"
        />
      )}
    </div>
  );
}
