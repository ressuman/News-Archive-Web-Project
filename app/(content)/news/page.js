//"use client";

import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/helper/news";
//import { getAllNews } from "@/lib/helper/news";
//import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";

//import { useEffect, useState } from "react";

/* USING OF USESTATE/USEEFFECT TO FETCH DATA*/
// export default function NewsPage() {
//   const [error, setError] = useState();
//   const [news, setNews] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function fetchNews() {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/news");

//       if (!response.ok) {
//         setError("Failed to fetch news");
//         setIsLoading(false);
//       }

//       const news = await response.json();
//       setIsLoading(false);
//       setNews(news);
//     }

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent;

//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <h1>News Page</h1>
//       {/* <NewsList news={DUMMY_NEWS} /> */}
//       {newsContent}
//     </>
//   );
// }

/* FETCHING DATA FROM A BACKEND SERVER ON A DIFFERENT PORT*/
// export default async function NewsPage() {
//   const response = await fetch("http://localhost:8080/news");

//   if (!response.ok) {
//     throw new Error("Failed to fetch news");
//   }

//   const news = await response.json();

//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={news} />
//     </>
//   );
// }

/* FETCHING DATA FROM A BACKEND SERVER ON A SAME PORT*/
export default async function NewsPage() {
  //const news = getAllNews();
  const news = await getAllNews();

  if (!news || news.length === 0) {
    return <p>No news found!</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
