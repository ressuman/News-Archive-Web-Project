# News Archive Web

This project is a news archive web application built using Next.js with the App Router. It features dynamic routing, server-side rendering, and a modular code structure designed for scalability and maintainability.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Component Details](#component-details)
  - [Pages and Layouts](#pages-and-layouts)
  - [Components](#components)
  - [Lib](#lib)
  - [Data](#data)
- [Prop Validation](#prop-validation)
- [Debugging](#debugging)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-news-archive.git
   cd nextjs-news-archive
   ```

````

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Folder Structure

The project is organized into the following structure:

```plaintext
└── 📁app
    └── 📁(content)
        └── 📁archive
            └── 📁@archive
                └── 📁[[...filter]]
                    └── error.js
                    └── page.js
            └── 📁@latest
                └── default.js
            └── layout.js
        └── 📁news
            └── 📁[newsSlug]
                └── 📁@modal
                    └── 📁(.)news-image
                        └── page.js
                    └── page.js
                └── 📁news-image
                    └── page.js
                └── layout.js
                └── not-found.js
                └── page.js
            └── page.js
        └── layout.js
        └── not-found.js
    └── 📁(marketing)
        └── layout.js
        └── page.js
    └── 📁api
        └── route.js
    └── globals.css
    └── icon.jpg

└── 📁assets
    └── logo.jpg

└── 📁components
    └── 📁header
        └── 📁main-header
            └── main-header.js
    └── 📁nav-link
        └── nav-link.js
    └── 📁news-list
        └── news-list.js

└── 📁data
    └── 📁dummy-news
        └── dummy-news.js

└── 📁lib
    └── 📁helper
        └── news.js

└── 📁news
    └── ai-robot.jpg
    └── beaver.jpg
    └── couple-cooking.jpg
    └── hiking.jpg
    └── landscape.jpg
```

### Folder Descriptions:

- **`app/`**: Contains the main application pages and layouts.
  - **`(content)/`**: Pages related to content, including archive and news sections.
    - **`archive/`**: Contains archive-related pages.
      - **`@archive/`**: Handles the filtered archive view.
      - **`@latest/`**: Displays the latest news.
    - **`news/`**: Handles news-related pages, with dynamic routing for individual news items.
      - **`[newsSlug]/`**: Dynamic route for individual news articles.
        - **`@modal/`**: Modal-specific components for news images.
          - **`(.)news-image/`**: Intercepted news image for modal view.
- **`assets/`**: Stores static assets like images and fonts.
- **`components/`**: Reusable UI components such as headers, navigation links, and news lists.
- **`data/`**: Contains mock data files.
- **`lib/`**: Helper functions and utilities.
- **`news/`**: Image assets related to news articles.

## Scripts

- **`dev`**: Starts the development server.
- **`build`**: Builds the application for production.
- **`start`**: Runs the built application.
- **`lint`**: Runs ESLint to lint your code.

## Component Details

### Pages and Layouts

- **`app/(content)/archive/layout.js`**: Defines the layout for the archive pages.
- **`app/(content)/news/[newsSlug]/layout.js`**: Layout for individual news articles.
- **`app/(content)/news/[newsSlug]/page.js`**: Displays detailed content for a specific news item.
- **`app/(marketing)/layout.js`**: Layout for the marketing section.
- **`app/(marketing)/page.js`**: The main page for the marketing section.

### Components

- **`components/header/main-header/main-header.js`**: The main header component with navigation.
- **`components/nav-link/nav-link.js`**: Custom navigation link with active state based on the current route.
- **`components/news-list/news-list.js`**: Renders a list of news items.

### Lib

- **`lib/helper/news.js`**: Contains functions for fetching and filtering news data.

### Data

- **`data/dummy-news/dummy-news.js`**: Contains an array of dummy news items used throughout the application.

### Assets

- **`assets/logo.jpg`**: Logo image used in the application.
- **`news/*.jpg`**: Images used for the dummy news items.

## Prop Validation

Prop validation is implemented using the `prop-types` package to ensure that components receive the correct prop types, which helps prevent bugs.

- **`nav-link.js`**: Validates `href` and `children` props.
- **`news-list.js`**: Validates the structure of the `news` array.
- **`news/[newsSlug]/page.js`**: Validates `params` prop to ensure the correct news item is displayed.

## Debugging

Debugging practices have been implemented to ensure the application runs smoothly:

- **Return Statements**: Added conditional checks and return statements where necessary to prevent errors.
- **Error Handling**: Implemented error handling in dynamic routes to manage missing or incorrect data gracefully.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Gif

Here is an expected gif of the preview of the App(News Archive Web)

## ![News Archive Web gif](./public/news-archive.gif)

````

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Now Start

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
