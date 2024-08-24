import NewsList from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/helper/news";

export default async function LatestNews() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
