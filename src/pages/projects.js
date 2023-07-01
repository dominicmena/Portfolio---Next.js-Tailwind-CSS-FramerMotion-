import React from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import GitIcon from "./components/Icons";
import Image from "next/image";
import project1 from "../../public/images/projects/vinyll.gif";
import project2 from "../../public/images/projects/clip.gif";
import project3 from "../../public/images/projects/mernimage.jpeg";
import {motion} from 'framer-motion'
import TransitionEffect from "./components/TransitionEffect";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8 dark:bg-dark dark:border-light
lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}} 
        transition={{duration:0.2}}
        priority
        sizes='(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw'
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GitIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, summary, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-5 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
        "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}} 
        transition={{duration:0.2}}
        priority
        sizes='(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw'/>
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GitIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Dominic Mena | Projects Page </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={`Code today.`}
            className="!mb-2 !text-4xl text-center lg:!text-3xl sm:mb-8 sm:!text-[20px] xs:!text-[15px]"
          />
                    <AnimatedText
            text={`innovate  tomorrow.`}
            className="!mb-2 !text-4xl text-center lg:!text-2xl sm:mb-8 sm:!text-[19px] xs:!text-[15px]"
          />

          <div className="mt-9 grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:mt-2">
            <div className="col-span-12">
              <FeaturedProject
                title="uVinyl" //"Record Room" - A social app that lets users connect with other vinyl enthusiasts and share their collections. Vinyl Crate An app that helps users organize their vinyl collections, create wishlists, and keep track of their purchases.
                //
                img={project1}
                summary="An Ecommerce app that sells vinyl, allows user registration, profile updates and order history. Built with NextJS, MongoDB & Tailwind"
                link="https://uvinyl.vercel.app/"
                github={"https://github.com/dominicmena/Vinyl-App"}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Recipe API Search App"
                img={project2}
                link="https://vuejs-search-meals-murex.vercel.app/"
                github={"https://github.com/dominicmena/Vue3-Recipe-Search-App"}
                type="VueJS, Vite, Vuex, Tailwind CSS"
                summary='An app providing users with a comprehensive API database to search recipes from various sources.'
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MERN Stack App"
                img={project3}
                link="/"
                github={"/"}
                type="(Coming Soon)"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
