import NewsList from "@/components/news-list/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/helper/news";
import Link from "next/link";
import { Suspense } from "react";

import PropTypes from "prop-types";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();

  let links = availableYears;

  const availableMonths = getAvailableNewsMonths(year);

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilterNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No News found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNews({ params }) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  //let news;

  //const availableYears = await getAvailableNewsYears();
  //let links = await getAvailableNewsYears();
  //let links = availableYears;

  //if (selectedYear && !selectedMonth) {
  //news = await getNewsForYear(selectedYear);
  //links = getAvailableNewsMonths(selectedYear);
  //}

  // if (selectedYear && selectedMonth) {
  //   //news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  //   links = [];
  // }

  // let newsContent = <p>No News found for the selected period.</p>;

  // if (news && news.length > 0) {
  //   newsContent = <NewsList news={news} />;
  // }

  // if (
  //   (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
  //   (selectedMonth &&
  //     !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  // ) {
  //   throw new Error("Invalid filter.");
  // }

  //const availableYears = await getAvailableNewsYears();
  // const availableMonths = getAvailableNewsMonths(selectedYear);

  // if (
  //   (selectedYear && !availableYears.includes(selectedYear)) ||
  //   (selectedMonth && !availableMonths.includes(selectedMonth))
  // ) {
  //   throw new Error("Invalid filter.");
  // }

  return (
    <>
      {/* <Suspense fallback={<p>Loading filtered year and month of news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense> */}
      {/* <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header> */}
      {/* {newsContent} */}
      <Suspense fallback={<p>Loading year and month of news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilterNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

FilteredNews.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
