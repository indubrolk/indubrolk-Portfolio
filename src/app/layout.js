import { Geist, Geist_Mono } from "next/font/google";
// import AppShell from "../components/AppShell";
import { Preloader } from "../components/Preloader";
import NeonCursor from "../components/NeonCursor";
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
  metadataBase: new URL("https://www.indubrolk.tech"),
  title: {
    default: "Induwara Jayakody | indu brolk",
    template: "%s | indu brolk",
  },
  description: "Hello! I'm Chamod Induwara, a passionate tech enthusiast, YouTuber, Tech Article Writer and IT undergraduate at the Sabaragamuwa University of Sri Lanka.",
  verification: {
    google: "google-site-verification=LtpvCVE4FxobYqbJYSPIwovqCNs50imfhvChsiPoi9M",
  },
  keywords: ["Induwara Jayakody", "indu brolk", "Tech Enthusiast", "YouTuber", "Software Developer", "Sri Lanka", "React", "Next.js", "FullStack Developer"],
  authors: [{ name: "Induwara Jayakody", url: "https://www.indubrolk.tech" }],
  creator: "Induwara Jayakody",
  openGraph: {
    title: "Induwara Jayakody | indu brolk",
    description: "Passionate tech enthusiast, YouTuber, and FullStack Developer from Sri Lanka.",
    url: "https://www.indubrolk.tech",
    siteName: "indu brolk",
    images: [
      {
        url: "/profile pic2.png",
        width: 800,
        height: 600,
        alt: "Induwara Jayakody Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Induwara Jayakody | indu brolk",
    description: "Passionate tech enthusiast, YouTuber, and FullStack Developer from Sri Lanka.",
    creator: "@indu_brolk",
    images: ["/profile pic2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/indu2.png",
    shortcut: "/indu2.png",
    apple: "/indu2.png",
  },
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
        <NeonCursor />
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
