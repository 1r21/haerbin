import { useQuery, gql } from "@apollo/client";
import { News } from "../services";

import Article from "./Article";
import Loading from "./Loading";
import "./Home.css";

const GET_ARTICLES = gql`
  query GetArticles {
    list {
      id
      cover
      title
      date
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<{ list: News[] }>(GET_ARTICLES);

  if (loading) return <Loading />;
  if (error) return <p>{`Error ${error}`}</p>;

  return (
    <ul className="home">
      {data!.list.map((item) => (
        <li className="article-wrap" key={item.id}>
          <Article {...item} />
        </li>
      ))}
    </ul>
  );
}
