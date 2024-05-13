import Image from "next/image";
import { Inter } from "next/font/google";
import AboutUs from "./AboutUs";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <AboutUs/>
      </div>
    </>
  );
}
