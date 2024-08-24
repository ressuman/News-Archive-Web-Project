import { notFound } from "next/navigation";
//import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";
import PropTypes from "prop-types";
import ModalBackdrop from "@/components/modal-backdrop/modal-backdrop";
import { getNewsItem } from "@/lib/helper/news";

export default async function InterceptedNewsImage({ params }) {
  const newsItemSlug = params.newsSlug;

  // const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

InterceptedNewsImage.propTypes = {
  params: PropTypes.shape({
    newsSlug: PropTypes.string.isRequired,
  }).isRequired,
};
