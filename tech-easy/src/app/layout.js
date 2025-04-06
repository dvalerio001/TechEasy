import "./globals.css"; // Global CSS that applies to the entire app
import Header from "./components/layout/Header";

// Define metadata for the application (for SEO and browser tabs)
export const metadata = {
  title: "Tech-Easy",
  description:
    "AI-Powered Tech Learning Platform to help improve your tech literacy",
};

/**
 * RootLayout Component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered inside this layout
 * @returns {JSX.Element} The layout structure with header, main content, and footer
 */
export default function RootLayout({ children }) {
  return (
    // The html element with language set to English
    <html lang="en">
      {/* The body element that contains all visible content */}
      <body>
        {<Header />}

        {/* 
          The main element contains the unique content of each page
          The children prop represents whatever page is currently being visited
        */}
        <main>{children}</main>

        {/* 
          We'll add the Footer component here later
        */}
      </body>
    </html>
  );
}
