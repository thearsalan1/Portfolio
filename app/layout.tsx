import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FirefliesBackground from "./components/FireFliesEffect";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohd Arsalan | Full Stack Developer",
  description:
    "Mohd Arsalan is a Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB. Explore his projects, technical skills, and experience building scalable, responsive, and user-focused web applications.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Mohd Arsalan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],

  authors: [{ name: "Mohd Arsalan" }],
  creator: "Mohd Arsalan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative z-10`}>
        <FirefliesBackground />
        {children}
      </body>
    </html>
  );
}
