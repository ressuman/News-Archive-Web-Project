// import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";

// import sql from "better-sqlite3";

// const db = sql("data.db");

// // export function getAllNews() {
// //   return DUMMY_NEWS;
// // }

// // export async function getAllNews() {
// //   const news = db.prepare("SELECT * FROM news").all();
// //   await new Promise((resolve) => setTimeout(resolve, 2000));
// //   return news;
// // }

// export function getLatestNews() {
//   return DUMMY_NEWS.slice(0, 3);
// }

// export function getAvailableNewsYears() {
//   return DUMMY_NEWS.reduce((years, news) => {
//     const year = new Date(news.date).getFullYear();
//     if (!years.includes(year)) {
//       years.push(year);
//     }
//     return years;
//   }, []).sort((a, b) => b - a);
// }

// export function getAvailableNewsMonths(year) {
//   return DUMMY_NEWS.reduce((months, news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     if (newsYear === +year) {
//       const month = new Date(news.date).getMonth();
//       if (!months.includes(month)) {
//         months.push(month + 1);
//       }
//     }
//     return months;
//   }, []).sort((a, b) => b - a);
// }

// export function getNewsForYear(year) {
//   return DUMMY_NEWS.filter(
//     (news) => new Date(news.date).getFullYear() === +year
//   );
// }

// export function getNewsForYearAndMonth(year, month) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }

// import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";
// import sql from "better-sqlite3";

// const db = sql("data.db");

// function initDb() {
//   db.prepare(
//     `
//     CREATE TABLE IF NOT EXISTS news (
//       id INTEGER PRIMARY KEY,
//       slug TEXT UNIQUE,
//       title TEXT,
//       content TEXT,
//       date TEXT,
//       image TEXT
//     )
//   `
//   ).run();

//   const { count } = db.prepare("SELECT COUNT(*) as count FROM news").get();
//   if (count === 0) {
//     const insert = db.prepare(`
//       INSERT INTO news (slug, title, content, date, image)
//       VALUES (?, ?, ?, ?, ?)
//     `);
//     DUMMY_NEWS.forEach((news) => {
//       insert.run(news.slug, news.title, news.content, news.date, news.image);
//     });
//   }
// }

// initDb();

// export async function getAllNews() {
//   const news = db.prepare("SELECT * FROM news").all();
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return news;
// }

// export async function getNewsItem(slug) {
//   const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return newsItem;
// }

// export async function getLatestNews() {
//   const latestNews = db
//     .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
//     .all();
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return latestNews;
// }

// export async function getAvailableNewsYears() {
//   const years = db
//     .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
//     .all()
//     .map((year) => year.year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return years;
// }

// export function getAvailableNewsMonths(year) {
//   return db
//     .prepare(
//       "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
//     )
//     .all(year)
//     .map((month) => month.month);
// }

// export async function getNewsForYear(year) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
//     )
//     .all(year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }

// export async function getNewsForYearAndMonth(year, month) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
//     )
//     .all(year, month);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }

// import { createClient } from "@supabase/supabase-js";

// // Initialize the Supabase client using environment variables
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Fetch all news items from the database
// export async function getAllNews() {
//   try {
//     // Optional: Simulate a delay (remove in production)
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     const { data, error } = await supabase.from("news").select("*");

//     // Check for errors and throw if any
//     if (error) {
//       throw new Error(`Error fetching news: ${error.message}`);
//     }

//     return data; // Return the fetched news data
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Fetch a single news item by slug from the database
// export async function getNewsItem(slug) {
//   try {
//     // Simulate a delay (optional)
//     await new Promise((resolve) => setTimeout(resolve, 5000));

//     const { data, error } = await supabase
//       .from("news")
//       .select("*")
//       .eq("slug", slug)
//       .single();

//     // Check for errors and throw if any
//     if (error) {
//       throw new Error(`Error fetching news item ${slug} : ${error.message}`);
//     }

//     return data; // Return the fetched news item
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return null; // Return null in case of an error
//   }
// }

// // Fetch the latest 3 news items from the database, ordered by date
// export async function getLatestNews() {
//   try {
//     // Optional: Simulate a delay (remove in production)
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     const { data, error } = await supabase
//       .from("news")
//       .select("*")
//       .order("date", { ascending: false })
//       .limit(3);

//     // Check for errors and throw if any
//     if (error) {
//       throw new Error(`Error fetching latest news: ${error.message}`);
//     }

//     return data; // Return the fetched latest news
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Fetch all available years from the 'news' table
// export async function getAvailableNewsYears() {
//   try {
//     // Optional: Simulate a delay (remove in production)
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     const { data: years, error } = await supabase.from("news").select("date");

//     // Check for errors and throw if any
//     if (error) {
//       throw new Error(`Error fetching news years: ${error.message}`);
//     }

//     // Extract distinct years from the date
//     const distinctYears = [
//       ...new Set(years.map((item) => new Date(item.date).getFullYear())),
//     ];

//     return distinctYears; // Return distinct years
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Fetch all available months for a specific year
// export async function getAvailableNewsMonths(year) {
//   if (!year || isNaN(year)) {
//     console.error("Invalid year provided:", year);
//     return []; // Return an empty array if year is invalid
//   }

//   try {
//     const { data, error } = await supabase
//       .from("news")
//       .select("date")
//       .gte("date", `${year}-01-01`)
//       .lte("date", `${year}-12-31`);

//     // Check for errors
//     if (error) {
//       throw new Error(`Error fetching news months: ${error.message}`);
//     }

//     // Extract distinct months from the date
//     const distinctMonths = [
//       ...new Set(data.map((item) => new Date(item.date).getMonth() + 1)),
//     ];

//     return distinctMonths; // Return distinct months
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Fetch all news items for a specific year
// export async function getNewsForYear(year) {
//   try {
//     const { data, error } = await supabase
//       .from("news")
//       .select("*")
//       .gte("date", `${year}-01-01`)
//       .lte("date", `${year}-12-31`)
//       .order("date", { ascending: false });

//     // Check for errors
//     if (error) {
//       throw new Error(`Error fetching news for the year: ${error.message}`);
//     }

//     return data; // Return the news data
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Fetch all news items for a specific year and month
// export async function getNewsForYearAndMonth(year, month) {
//   const lastDay = new Date(year, month, 0).getDate(); // Calculate the last day of the month
//   const startDate = `${year}-${month}-01`;
//   const endDate = `${year}-${month}-${lastDay}`;

//   try {
//     const { data, error } = await supabase
//       .from("news")
//       .select("*")
//       .gte("date", startDate)
//       .lte("date", endDate)
//       .order("date", { ascending: false });

//     if (error) {
//       console.error(
//         "Error fetching news for the year and month:",
//         error.message
//       );
//       return [];
//     }

//     return data; // Return the news data
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     return []; // Return an empty array in case of an error
//   }
// }

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all news items from the Supabase database
export async function getAllNews() {
  try {
    const { data, error } = await supabase.from("news").select("*");

    if (error) {
      throw new Error(`Error fetching news: ${error.message}`);
    }

    // Optional: Simulate a delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data; // Return the fetched news data
  } catch (error) {
    console.error("An error occurred:", error.message);
    return []; // Return an empty array in case of an error
  }
}

// Fetch a single news item by slug from the Supabase database
export async function getNewsItem(slug) {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      throw new Error(`Error fetching news item: ${error.message}`);
    }

    // Optional: Simulate a delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return null;
  }
}

// Fetch the latest 3 news items from the Supabase database, ordered by date
export async function getLatestNews() {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("date", { ascending: false })
      .limit(3);

    if (error) {
      throw new Error(`Error fetching latest news: ${error.message}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return [];
  }
}

// Fetch all available years from the 'news' table
export async function getAvailableNewsYears() {
  try {
    const { data, error } = await supabase.from("news").select("date");

    if (error) {
      throw new Error(`Error fetching news years: ${error.message}`);
    }

    // Extract distinct years from the date
    const distinctYears = [
      ...new Set(data.map((item) => new Date(item.date).getFullYear())),
    ];

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return distinctYears;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return [];
  }
}

// Fetch all available months for a specific year
export async function getAvailableNewsMonths(year) {
  if (!year || isNaN(year)) {
    console.error("Invalid year provided:", year);
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("news")
      .select("date")
      .gte("date", `${year}-01-01`)
      .lte("date", `${year}-12-31`);

    if (error) {
      throw new Error(`Error fetching news months: ${error.message}`);
    }

    // Extract distinct months from the date
    const distinctMonths = [
      ...new Set(data.map((item) => new Date(item.date).getMonth() + 1)),
    ];

    return distinctMonths;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return [];
  }
}

// Fetch all news items for a specific year
export async function getNewsForYear(year) {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .gte("date", `${year}-01-01`)
      .lte("date", `${year}-12-31`)
      .order("date", { ascending: false });

    if (error) {
      throw new Error(`Error fetching news for the year: ${error.message}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return [];
  }
}

// Fetch all news items for a specific year and month
export async function getNewsForYearAndMonth(year, month) {
  const lastDay = new Date(year, month, 0).getDate(); // Calculate the last day of the month
  const startDate = `${year}-${month}-01`;
  const endDate = `${year}-${month}-${lastDay}`;

  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate)
      .order("date", { ascending: false });

    if (error) {
      throw new Error(
        `Error fetching news for the year and month: ${error.message}`
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return [];
  }
}
