import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "To Do Application",
  description: "To Do Application written in Next Js",
  icons: {
    icon: "/todo_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="p-10 flex flex-col items-center">
          <Image
            src="/todo_logo.svg"
            alt="To Do Logo"
            width={100}
            height={100}
          />
          <h1 className="mb-20">
            Welcome to my To Do Application written in Next Js
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}
