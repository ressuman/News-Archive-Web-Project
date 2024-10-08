import { getNewsItem } from "@/lib/helper/news";
import { notFound } from "next/navigation";
//import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";
import PropTypes from "prop-types";

export default async function NewsImage({ params }) {
  const newsItemSlug = params.newsSlug;

  // const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

NewsImage.propTypes = {
  params: PropTypes.shape({
    newsSlug: PropTypes.string.isRequired,
  }).isRequired,
};
