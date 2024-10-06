// import { DUMMY_NEWS } from "@/data/dummy-news/dummy-news";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default async function handler(req, res) {
//   try {
//     // Create 'news' table if it doesn't exist
//     const { error: tableError } = await supabase.rpc("create_news_table");
//     if (tableError) {
//       console.error("Error creating news table:", tableError.message);
//       return res.status(500).json({ error: tableError.message });
//     }

//     // Check if the 'news' table already has data
//     const { data: existingData, error: fetchError } = await supabase
//       .from("news")
//       .select("slug");

//     if (fetchError) {
//       console.error("Error fetching existing slugs:", fetchError.message);
//       return res.status(500).json({ error: fetchError.message });
//     }

//     const existingSlugs = new Set(existingData.map((item) => item.slug));
//     const newsToInsert = DUMMY_NEWS.filter(
//       (news) => !existingSlugs.has(news.slug)
//     );

//     if (newsToInsert.length > 0) {
//       const { error: insertError } = await supabase.from("news").insert(
//         newsToInsert.map((news) => ({
//           slug: news.slug,
//           title: news.title,
//           content: news.content,
//           date: news.date,
//           image: news.image,
//         }))
//       );

//       if (insertError) {
//         console.error("Error inserting news:", insertError.message);
//         return res.status(500).json({ error: insertError.message });
//       }
//     }

//     res.status(200).json({ message: "Database initialized successfully." });
//   } catch (error) {
//     console.error("Error initializing database:", error);
//     res.status(500).json({ error: error.message });
//   }
// }

// // // Initialize the database and insert dummy data if the table is empty
// // async function initDb() {
// //   try {
// //     // Create 'news' table if it doesn't exist
// //     const { error: tableError } = await supabase.rpc("create_news_table");
// //     if (tableError) {
// //       console.error("Error creating news table:", tableError.message);
// //       return;
// //     }

// //     // Check if the 'news' table already has data
// //     const { data: existingData, error: fetchError } = await supabase
// //       .from("news")
// //       .select("slug");

// //     if (fetchError) {
// //       console.error("Error fetching existing slugs:", fetchError.message);
// //       return;
// //     }

// //     const existingSlugs = new Set(existingData.map((item) => item.slug));

// //     // Filter DUMMY_NEWS to only include entries with unique slugs
// //     const newsToInsert = DUMMY_NEWS.filter(
// //       (news) => !existingSlugs.has(news.slug)
// //     );

// //     if (newsToInsert.length > 0) {
// //       const { error: insertError } = await supabase.from("news").insert(
// //         newsToInsert.map((news) => ({
// //           slug: news.slug,
// //           title: news.title,
// //           content: news.content,
// //           date: news.date,
// //           image: news.image,
// //         }))
// //       );

// //       if (insertError) {
// //         console.error("Error inserting news:", insertError.message);
// //       } else {
// //         console.log("Dummy data inserted successfully.");
// //       }
// //     } else {
// //       console.log("All dummy data slugs already exist. No data inserted.");
// //     }
// //   } catch (error) {
// //     console.error("Error initializing database:", error);
// //   }
// // }

// // // Call the initialization function
// // initDb();
