import { type GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getNewsById, News } from "@1r21/api-h5";
import { Text, parseText } from "@1r21/util";

export default function Detail({
  article,
  texts,
}: {
  article: News;
  texts: Text[];
}) {
  return (
    <div className="w-3/5 mx-auto pb-[100px]">
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        {texts.map(({ idx, style, value }) => {
          return (
            <p key={idx} className="my-2" style={style}>
              {value}
            </p>
          );
        })}
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

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const { params } = context;
  const article = await getNewsById(params?.id!);
  const formatTexts = parseText(article.transcript);
  // Pass data to the page via props
  return { props: { article, texts: formatTexts } };
}
