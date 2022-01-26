import { Link } from "react-router-dom";
import { News } from "@1r21/youyihe";

export default function Article({ id, cover, title, date }: News) {
  return (
    <Link to={`/detail/${id}`} className="inline-block w-full">
      <div className="h-28 rounded overflow-hidden bg-gray-300 group">
        <img
          src={cover}
          className="block w-full h-full text-white bg-gray-300 transition-transform duration-1000 group-hover:rotate-[5deg] group-hover:scale-110"
          alt="Fetch cover err"
        />
      </div>
      <p className="text-xs my-2">{date}</p>
      <p className="line-clamp-3 text-sm" title={title}>
        {title}
      </p>
    </Link>
  );
}
