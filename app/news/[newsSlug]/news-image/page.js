import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";

export default function NewsImage({ params }) {
  const newsItemSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
