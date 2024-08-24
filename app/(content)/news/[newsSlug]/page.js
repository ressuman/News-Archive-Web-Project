import { notFound } from "next/navigation";
import Link from "next/link";
//import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";

import PropTypes from "prop-types";
import { getNewsItem } from "@/lib/helper/news";

export default async function NewsDetailPage({ params }) {
  const newsSlugItem = params.newsSlug;

  // const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlugItem);

  const newsItem = await getNewsItem(newsSlugItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/news-image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}

NewsDetailPage.propTypes = {
  params: PropTypes.shape({
    newsSlug: PropTypes.string.isRequired,
  }).isRequired,
};
