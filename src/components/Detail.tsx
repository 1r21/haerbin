import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { News } from "../services";
import { parseText } from "../utils";
import Loading from "./Loading";
import "./Detail.css";

const Get_Detail = gql`
  query Detail($id: String!) {
    article(id: $id) {
      source
      src
      transcript
    }
  }
`;

type AritcleData = { article: News };
type AritcleVars = Pick<News, "id">;

export default function Detail() {
  let { id } = useParams<AritcleVars>();
  const { loading, error, data } = useQuery<AritcleData, AritcleVars>(
    Get_Detail,
    {
      variables: { id },
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>{`Error ${error}`}</p>;

  const article = data!.article;
  const texts = parseText(article.transcript);
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
        <p className="source">
          from:
          <a href={article.source} rel="noreferrer" target="_blank">
            pbs
          </a>
        </p>
      </div>
      {article.source && <audio controls src={article.src} className="audio" />}
    </div>
  );
}
