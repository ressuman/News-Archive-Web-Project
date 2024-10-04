//import { getAllNews, getNewsItem, getLatestNews } from "../lib/helper/news";

import { getAllNews } from "@/lib/helper/news";

export async function handler(event) {
  const { httpMethod } = event;

  if (httpMethod === "GET") {
    const news = await getAllNews();
    return {
      statusCode: 200,
      body: JSON.stringify(news),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
}
