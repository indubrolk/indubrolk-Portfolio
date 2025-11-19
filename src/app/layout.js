import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "../components/AppShell";
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
  icons: {
    icon: "/indu fav.png",
    shortcut: "/indu fav.png",
    apple: "/indu fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="180*180" href="/indu fav.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
