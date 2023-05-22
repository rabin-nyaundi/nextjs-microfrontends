import Image from "next/image";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("forms/footer"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col w-full items-center justify-between p-10 ${inter.className}`}
    >
      <h1> This is the main application page : HOMEPAGE</h1>
    </main>
  );
}
