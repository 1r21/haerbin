import { useEffect, useState } from "react";
import { getNews, News } from "../services";

import Article from "./Article";
import "./Home.css";

export default function Home() {
  const [articles, setArticles] = useState<News[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const { list } = await getNews();
      setArticles(list);
    };
    fetch();
  }, []);
  return (
    <ul className="home">
      {articles.map((item) => (
        <li className="article-wrap" key={item.id}>
          <Article {...item} />
        </li>
      ))}
    </ul>
  );
}
