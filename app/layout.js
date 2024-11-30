import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BlogVerse",
  description: "BlogVerse: A platform to explore and share insightful blog posts, ranging from beginner tutorials to advanced topics across various technologies. Join a community of learners and experts, and dive into a universe of knowledge."
,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark hydrated">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
