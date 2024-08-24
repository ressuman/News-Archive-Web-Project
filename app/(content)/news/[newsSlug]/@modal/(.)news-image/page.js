"use client";

import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";
import PropTypes from "prop-types";

export default function InterceptedNewsImage({ params }) {
  const router = useRouter();

  const newsItemSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
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
