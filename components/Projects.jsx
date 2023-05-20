import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web4 from "../public/web3.png";
import web6 from "../public/web6.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-2 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 dark:text-white">
          Since the beginning of my journey as a designer and developer, I've
          done so many Projects for
          <span className="text-teal-500"> practice </span>
          and for <span className="text-teal-500">Clients. </span>I also work
          with talented peoples to create digital products.
        </p>
        <p className="text-md py-2 dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 group relative ">
          <Image
            className="rounded-md object-cover"
            width={"100%"}
            height={"100%"}
            src={web4}
          />
          <div class="absolute top-0 left-0 w-full h-0 flex justify-center  gap-4 items-center bg-gray-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://glistening-salmiakki-38d335.netlify.app/"
            >
              <AiOutlineLink />
              <span>Live</span>
            </a>
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://github.com/hridoykhandakar/Movie-Bazar"
            >
              <AiFillGithub />
              <span>Source Code</span>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex-1 group relative ">
          <Image
            className="rounded-md object-cover"
            width={"100%"}
            height={"100%"}
            src={web1}
          />
          <div class="absolute top-0 left-0 w-full h-0 flex justify-center  gap-4 items-center bg-gray-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://hrk-weaves.netlify.app/"
            >
              <AiOutlineLink />
              <span>Live</span>
            </a>
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://github.com/hridoykhandakar/react-music-player"
            >
              <AiFillGithub />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        <div className="basis-1/3 flex-1 group relative ">
          <Image
            className="rounded-md object-cover"
            width={"100%"}
            height={"100%"}
            src={web2}
          />
          <div class="absolute top-0 left-0 w-full h-0 flex justify-center  gap-4 items-center bg-gray-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://github.com/hridoykhandakar/fcal"
            >
              <AiOutlineLink />
              <span>Live</span>
            </a>
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://hrkfc.netlify.app/"
            >
              <AiFillGithub />
              <span>SourceCode</span>
            </a>
          </div>
        </div>

        <div className="basis-1/3 flex-1 group relative ">
          <Image
            className="rounded-md object-cover"
            width={"100%"}
            height={"100%"}
            src={web6}
          />
          <div class="absolute top-0 left-0 w-full h-0 flex justify-center  gap-4 items-center bg-gray-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://hridoykhandakar.github.io/tasty/"
            >
              <AiOutlineLink />
              <span>Live</span>
            </a>
            <a
              class="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-teal-400 text-white "
              href="https://github.com/hridoykhandakar/tasty"
            >
              <AiFillGithub />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
