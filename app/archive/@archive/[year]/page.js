import NewsList from "@/components/news-list/news-list";
import { getNewsForYear } from "@/lib/helper/news";

export default function FilteredNews({ params }) {
  const { year } = params;

  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
