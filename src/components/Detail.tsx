import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById, News } from "@1r21/api-h5";
import { Text, parseText } from "@1r21/util";

import Loading from "./Loading";

export default function Detail() {
  let { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<News>();
  const [texts, setTexts] = useState<Text[]>([]);

  useEffect(() => {
    const getArticle = async () => {
      const news = await getNewsById(id!);
      setArticle(news);
      const formatTexts = parseText(news.transcript);
      setTexts(formatTexts);
      setLoading(false);
    };
    setLoading(true);
    getArticle();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="w-3/5 mx-auto pb-[100px]">
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
            className=" text-blue-500 italic underline"
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
