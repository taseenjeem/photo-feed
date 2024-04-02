import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";

const inter = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Photo Feed",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
