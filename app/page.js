import Link from "next/link";

export default function Home() {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href="/news">News Page</Link>
    </div>
  );
}
