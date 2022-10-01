import { useState } from "preact/hooks";
export type News = {
  id: string;
  cover: string;
  title: string;
  date: string;
  source?: string;
  transcript?: string;
  src?: string;
};

export default function Article({ id, cover, title, date }: News) {
  const [imageSrc, setImageSrc] = useState(cover);

  function imageErrHandle() {
    setImageSrc("/images/place/1004.jpg");
  }
  return (
    <a href={`/detail/${id}`}>
      <div className="h-28 rounded overflow-hidden bg-gray-300 group">
        <img
          src={imageSrc}
          className="block w-full h-full text-white bg-gray-300 transition-transform duration-1000 group-hover:rotate-[5deg] group-hover:scale-110"
          onError={imageErrHandle}
          alt="Fetch cover err"
        />
      </div>
      <p className="text-xs my-2">{date}</p>
      <p className="line-clamp-3 text-sm" title={title}>
        {title}
      </p>
    </a>
  );
}
