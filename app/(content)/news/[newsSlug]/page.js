import { notFound } from "next/navigation";
import Link from "next/link";
import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";

export default function NewsDetailPage({ params }) {
  const newsSlugItem = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlugItem);

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
