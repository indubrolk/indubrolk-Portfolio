import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const font = Sora({
    weight: ['100','200', '300', '400', '500','600', '700', '800' ],
    subsets: ['latin', ]
})

export const metadata: Metadata = {
  title: "indu brolk portfolio",
  description: "portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
