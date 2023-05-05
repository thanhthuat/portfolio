import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@components/layouts/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeLayout/>
}
