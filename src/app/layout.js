import { Geist, Geist_Mono } from "next/font/google";
// import AppShell from "../components/AppShell";
import { Preloader } from "../components/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "indu brolk",
  description: "Your Best Technocract",
  // icons: {
  //   icon: "/indu2.png",
  //   shortcut: "/indu2.png",
  //   apple: "/indu2.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/indu2.png" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
