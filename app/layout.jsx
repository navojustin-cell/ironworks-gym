import "./globals.css";
import Masthead from "./Masthead";
import Footer from "./Footer";

export const metadata = {
  title: {
    default: "Ironworks Gym — Grass Valley, CA",
    template: "%s — Ironworks Gym",
  },
  description:
    "A 24-hour gym in Grass Valley, California, and home of the Combat Training Center. Strength training, boxing, MMA, and jiu-jitsu under one name.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* One masthead, one footer, rendered on every page including /combat.
            This is the merge: Combat can never again be a place you cannot leave. */}
        <Masthead />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
