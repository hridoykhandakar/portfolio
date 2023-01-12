import Image from "next/image";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";

const Services = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-2 dark:text-white md:text-4xl">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-6">
        <div className="group text-center shadow-2xl hover:shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-slate-800 ">
          <Image
            className="mx-auto group-hover:skew-x-12"
            src={consulting}
            width={100}
            height={100}
          />
          <h3 className="text-xl font-medium pt-8 pb2">Consulting</h3>
          <p className="py-2 ">
            Are you interested in feedback for your current project? I can give
            you tips.
          </p>
          <h4 className="text-lg py-4 text-teal-600 ">Design Tools I Use</h4>
          <div className="flex gap-2 justify-center">
            <p className="bg-teal-600 rounded-full text-xs text-white p-2 ">
              Photoshop
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Illustrator
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Figma
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Indesign
            </p>
          </div>
        </div>

        <div className=" group text-center shadow-2xl hover:shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-slate-800 ">
          <Image
            className="mx-auto transition-all duration-150 group-hover:skew-y-12"
            src={design}
            width={100}
            height={100}
          />
          <h3 className="text-xl font-medium pt-8 pb2">Beautiful Design</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="text-lg py-4 text-teal-600">Design Tools I Use</h4>
          <div className="flex gap-2 justify-center">
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Photoshop
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Illustrator
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Figma
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Indesign
            </p>
          </div>
        </div>
        <div className="group text-center shadow-2xl hover:shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-slate-800 ">
          <Image
            className="mx-auto transition-all duration-150 group-hover:skew-y-12"
            src={code}
            width={100}
            height={100}
          />
          <h3 className="text-xl font-medium pt-8 pb2">Code</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="text-lg py-4 text-teal-600">Tools I Use</h4>
          <div className="flex gap-2 justify-center">
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              React
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              Tailwind
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              SASS
            </p>
            <p className="bg-teal-600 rounded-full text-xs text-white p-2">
              NodeJS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
