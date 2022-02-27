import Head from "next/head";
import { News, getNews } from "@1r21/api-h5";

import Article from "@/components/Article";

export default function Home({ articles }: { articles: News[] }) {
  return (
    <div className="w-9/12 h-full mx-auto">
      <Head>
        <title>I Believe</title>
      </Head>
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

export async function getStaticProps() {
  // Fetch data from external API
  const { list } = await getNews();
  // Pass data to the page via props
  return { props: { articles: list }, revalidate: 10 };
}
