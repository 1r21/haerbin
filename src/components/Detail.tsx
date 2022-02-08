import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { News } from "@1r21/types";
import { parseText } from "@1r21/util";
import Loading from "./Loading";

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
type AritcleVars = Partial<Pick<News, "id">>;

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
    <div className="w-3/5 mx-auto pb-[100px]">
      <div>
        {texts.map(({ idx, style, value }) => {
          return (
            <p style={{ ...style }} key={idx} className="my-2">
              {value}
            </p>
          );
        })}
        <p className="text-right">
          from:
          <a
            href={article.source}
            rel="noreferrer"
            target="_blank"
            className=" text-blue-500 italic underline"
          >
            pbs
          </a>
        </p>
      </div>
      {article.source && (
        <audio
          controls
          src={article.src}
          className="fixed bottom-2 w-3/5 outline-none"
        />
      )}
    </div>
  );
}
