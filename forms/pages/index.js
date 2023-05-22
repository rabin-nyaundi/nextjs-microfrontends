import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen flex-1 items-center justify-around p-24 ${inter.className}`}
    >
     

      <div className="prose mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>Forms</h1>
      </div>
    </main>
  );
}
