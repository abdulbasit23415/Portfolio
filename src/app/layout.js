import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdulbasit | Portfolio",
  description: "Python developer and full-stack engineer with a strong focus on data-driven applications and intelligent systems. I build scalable, efficient solutions using modern technologies like Node.js, Next.js, and Tailwind, blending backend logic with seamless user experiences. My work often integrates machine learning, automation, and real-world problem-solving, ranging from finance and education to healthcare. Passionate about creating impactful tech that’s both innovative and practical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
