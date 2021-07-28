import { Link } from "react-router-dom";

import { News } from "../services";
import "./Article.css";

export default function Article({ id, cover, title, date }: News) {
  return (
    <Link to={`/detail/${id}`} className="article-content">
      <div className="cover-wrap">
        <img src={cover} alt={title} />
      </div>
      <p className="text">{date}</p>
      <p className="text title" title={title}>
        {title}
      </p>
    </Link>
  );
}
