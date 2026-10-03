import { Noto_Serif_Bengali} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import Marquee from "./components/Marquee";
import NavLink from "./components/NavLink";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
});

export const metadata = {
  title: "BD Chronicles",
  description: "Latest news and updates from Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased bg-[#fafafa]`}
    >
      <body className="font-noto-serif-bengali min-h-full flex flex-col max-w-7xl mx-auto max-sm:px-4">
        <NavHeader/>
        <NavLink/>
        <Marquee/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
