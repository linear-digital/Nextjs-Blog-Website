import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hazrat Ali Blog Site",
  description: "Hazrat Ali Blog Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#1E1743] text-white`}>
        {children}
      </body>
    </html>
  );
}
