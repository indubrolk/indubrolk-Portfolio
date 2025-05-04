import type { Metadata } from "next";
import {Sora} from "next/font/google";
import { Tailwind } from "globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Sora ({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "indu brolk portfolio",
    description: "webdev portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
