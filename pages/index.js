import Head from "next/head";
import Image from "next/image";
import hridoy from "../public/dev-ed-wave.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Services from "../components/Services";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const handleDark = (value) => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hridoy Khandakar-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav handleDark={handleDark} />

      <main className=" bg-white md:p-15 px-10 md:px-20 lg:px-40  dark:bg-gray-900">
        <section className="p-10">
          <div className="text-center mt-20">
            <h2 className="text-5xl py-2  text-teal-600 font-semibold md:text-6xl">
              Hridoy Khandakar
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 cursor-pointer text-gray-600 dark:text-white">
            <Link href="https://www.linkedin.com/in/hridoykhandakar/" passHref>
              <AiFillLinkedin className="transition duration-150 ease-in-out hover:text-blue-500" />
            </Link>
            <Link href="https://github.com/hridoykhandakar" passHref>
              <AiFillGithub className="transition duration-150 ease-in-out  hover:text-black" />
            </Link>
            <Link href="">
              <AiFillTwitterCircle className="transition duration-150 ease-in-out  hover:text-blue-500" />
            </Link>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto my-20 overflow-hidden md:h-96 md:w-96">
            <Image className="object-fill h-full" src={hridoy} />
          </div>
        </section>
        <Services />
        <Projects />
      </main>
    </div>
  );
}
