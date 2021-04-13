import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById, News } from "../services";
import { Text, parseText } from "../utils";

import "./Detail.css";

export default function Detail() {
  let { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<News>();
  const [texts, setTexts] = useState<Text[]>([]);

  useEffect(() => {
    const getArticle = async () => {
      const news = await getNewsById(id);
      setArticle(news);
      const formatTexts = parseText(news.transcript);
      setTexts(formatTexts);
    };
    getArticle();
  }, [id]);

  return (
    <div className="detail">
      <div>
        {texts.map(({ idx, type, value }) => {
          return (
            <p className={type} key={idx}>
              {value}
            </p>
          );
        })}
      </div>
      {article?.source && (
        <audio controls src={article.src} className="audio" />
      )}
    </div>
  );
}