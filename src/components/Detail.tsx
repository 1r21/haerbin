import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { News } from "../services";
import { parseText } from "../utils";

import "./Detail.css";

const Get_Detail = gql`
  query Detail($id: String!) {
    article(id: $id) {
      title
      date
      source
      src
      transcript
    }
  }
`;

type AritcleDataa = { article: News };
type AritcleVars = { id: Required<string> };

export default function Detail() {
  let { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<AritcleDataa, AritcleVars>(
    Get_Detail,
    {
      variables: { id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error ${error}`}</p>;

  const texts = parseText(data!.article.transcript);

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
      {data!.article.source && (
        <audio controls src={data!.article.src} className="audio" />
      )}
    </div>
  );
}
