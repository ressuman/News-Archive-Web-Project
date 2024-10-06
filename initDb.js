import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Dummy news data
const dummyNews = [
  {
    slug: "will-ai-replace-humans",
    title: "Will AI Replace Humans?",
    image: "ai-robot.jpg",
    date: "2021-07-01",
    content:
      "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
  },
  {
    slug: "beaver-plague",
    title: "A Plague of Beavers",
    image: "beaver.jpg",
    date: "2022-05-01",
    content:
      "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
  },
  {
    slug: "couple-cooking",
    title: "Spend more time together!",
    image: "couple-cooking.jpg",
    date: "2024-03-01",
    content:
      "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
  },
  {
    slug: "hiking",
    title: "Hiking is the best!",
    image: "hiking.jpg",
    date: "2024-01-01",
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    slug: "landscape",
    title: "The beauty of landscape",
    image: "landscape.jpg",
    date: "2022-07-01",
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
  {
    slug: "global-warming",
    title: "Global Warming and its Effects",
    image: "global-warming.png",
    date: "2023-09-15",
    content:
      "Global warming is becoming a critical issue with more natural disasters occurring. Scientists warn that immediate action is required to combat climate change before it’s too late.",
  },
  {
    slug: "elon-mars-mission",
    title: "Elon Musk's Mars Mission",
    image: "elon-mars.png",
    date: "2024-06-10",
    content:
      "Elon Musk’s SpaceX is getting closer to sending humans to Mars. The space exploration company is developing its new Starship rocket for the ambitious mission to make humanity a multi-planetary species.",
  },
  {
    slug: "music-festival-2024",
    title: "Biggest Music Festival of 2024 Announced",
    image: "music-festival.png",
    date: "2024-03-05",
    content:
      "The world's biggest music festival has just announced its lineup for 2024, featuring artists from various genres. The festival promises to be the most attended music event in history.",
  },
  {
    slug: "quantum-computing",
    title: "The Rise of Quantum Computing",
    image: "quantum-computing.avif",
    date: "2023-08-21",
    content:
      "Quantum computing is making huge strides, with tech giants like Google and IBM investing billions into research. This new form of computing is expected to revolutionize industries ranging from medicine to finance.",
  },
  {
    slug: "new-electric-cars",
    title: "New Electric Cars Revolutionizing Transportation",
    image: "electric-car.avif",
    date: "2023-11-30",
    content:
      "The electric vehicle industry is booming with more manufacturers rolling out new models. With advancements in battery technology and charging infrastructure, EVs are becoming more accessible and efficient.",
  },
  {
    slug: "medical-breakthrough",
    title: "Medical Breakthrough in Cancer Treatment",
    image: "medical-breakthrough.avif",
    date: "2024-01-20",
    content:
      "Scientists have developed a revolutionary treatment for cancer that uses genetically engineered cells to target and destroy tumors, showing promising results in clinical trials.",
  },
  {
    slug: "hollywood-strike",
    title: "Hollywood Writers Strike",
    image: "hollywood-strike.avif",
    date: "2023-10-12",
    content:
      "Hollywood is in turmoil as screenwriters go on strike for better pay and working conditions. Major productions have been halted as the industry faces a significant disruption.",
  },
  {
    slug: "cybersecurity-threat",
    title: "Growing Cybersecurity Threats",
    image: "cybersecurity-threat.webp",
    date: "2023-12-05",
    content:
      "As more businesses move online, cybersecurity threats are at an all-time high. Experts warn that companies need to strengthen their defenses to prevent data breaches and cyberattacks.",
  },
  {
    slug: "olympics-2024-preview",
    title: "Preview of the 2024 Olympics",
    image: "olympics.webp",
    date: "2024-05-10",
    content:
      "With the 2024 Olympics just around the corner, athletes from around the world are preparing for the ultimate test of their skills. The event promises to showcase both new and veteran talents.",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy Reaches New Heights",
    image: "renewable-energy.webp",
    date: "2023-06-18",
    content:
      "The renewable energy sector is experiencing massive growth, with solar and wind power becoming the cheapest forms of electricity in many parts of the world. Investment in green energy is at an all-time high.",
  },
];

async function initData() {
  try {
    // Fetch all the existing slugs from the "news" table
    const { data: existingNews, error: fetchError } = await supabase
      .from("news")
      .select("slug");

    if (fetchError) {
      console.error("Error fetching existing news:", fetchError);
      return;
    }

    // Extract existing slugs into an array
    const existingSlugs = existingNews.map((newsItem) => newsItem.slug);

    // Filter out the dummyNews that already exist (matching slug)
    const newsToInsert = dummyNews.filter(
      (newsItem) => !existingSlugs.includes(newsItem.slug)
    );

    // If there is any news left to insert, proceed with the insert
    if (newsToInsert.length > 0) {
      const { data: insertedData, error: insertError } = await supabase
        .from("news")
        .insert(newsToInsert);

      if (insertError) {
        console.error("Error inserting news:", insertError);
      } else {
        console.log("News inserted successfully:", insertedData);
      }
    } else {
      console.log("No new news to insert. All items already exist.");
    }
  } catch (error) {
    console.error("Error initializing data:", error);
  }
}

// Run the data initialization
initData();
