import { useEffect, useState } from "react";
import { getNews, News } from "../services";

import Article from "./Article";
import Loading from "./Loading";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<News[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const { list } = await getNews();
      console.log('🚀 ~ file: Home.tsx ~ line 13 ~ fetch ~ list', list)
      setArticles(list);
      setLoading(false);
    };
    setLoading(true);
    fetch();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="w-9/12 h-full mx-auto">
      <ul className="flex flex-wrap">
        {articles.map((item) => (
          <li className="w-1/5 p-2" key={item.id}>
            <Article {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
