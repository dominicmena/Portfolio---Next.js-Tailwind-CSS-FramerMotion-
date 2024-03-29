import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/img662.jpg";
import pythonImg from "../../public/images/svgs/python-fill.svg";
import jsImg from "../../public/images/svgs/javascript-fill.svg";
import htmlImg from "../../public/images/svgs/logo-html5.svg";
import cssImg from "../../public/images/svgs/logo-css3.svg";
import reactImg from "../../public/images/svgs/react-fill.svg";
import mongoImg from "../../public/images/svgs/mongodb.svg";
import nextImg from "../../public/images/svgs/next-js.svg";
import sqlImg from "../../public/images/svgs/postgresql-fill.svg";
import djangoImg from "../../public/images/svgs/django-fill.svg";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";



const inter = Inter({ subsets: ["latin"] });

export default function Home({textContent}) {
  return (
    <>
      <Head>
        <title>Dominic Mena | Portfolio </title>
        <meta name="description" content="Generated by create next app" />


      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 pr-8 md:pr-0 md:w-full">
              <Image
                src={profilePic}
                alt="DominicMena"
                className="w-auto h-full lg:hidden md:inline-block md:w-full pb-24 md:pb-12"
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center xs:mt-4 lg:w-full lg:text-center">
              <AnimatedText
                text={textContent[0]}
                className="!text-left !font-bold !text-4xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-[30px] sm:!text-[30px] xs:!text-[20px] md:pb-3"
              />

              <AnimatedText
                text={textContent[1]}
                className="!text-[20px] !text-primary !text-left xl:!text-2xl lg:!text-center lg:!text-[3xl] md:!text-[22px] sm:!text-[20px] xs:!text-[15px] dark:!text-primaryDark sm:text-primaryDark"
              />
                <AnimatedText
                text={textContent[2]}
                className="!text-[20px] !text-primary !text-left xl:!text-2xl lg:!text-center lg:!text-[2xl] md:!text-[22px] sm:!text-[20px] xs:!text-[14px] dark:!text-primaryDark sm:text-primaryDark"
              />
              <p className="my-4 xl:text-[18px] text-[18px] font-medium md:text-md sm:text-[17px] sm:text-semibold"> 
                Full stack application experience w/ JavaScript, Python, React,
                REST API, PostgreSQL & more. Committed to creative
                problem-solving, clear communication, & meticulous attention to
                detail. 
                <br/><br/>
                In strategy & operations I am skilled in project management, operations management, strategic planning, data analysis, data entry, auditing, Microsoft Excel, data mining, & account management.
                
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/DominicMenaResume2023.pdf"
                  target={"_blank"}
                  className="flex items-center text-light p-2.5 px-6
          rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
          border=2 border-solid border-transparent hover:border-dark

          dark:bg-light dark:text-light hover:dark:bg-dark hover:dark:text-light md:max-w-[800px]
          hover:dark:border-light md:p-2 md:px-4 md:text-base
          "
                  style={{ backgroundColor: "#8B0000" }}
                >
                  Resume <LinkArrow className={"w-6 ml-1 md:max-w-[15px]"} />
                </Link>
                <Link
                  href="mailto:mena.dominic@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
              <div className="relative right-0 top-20 w-12 flex flex-row justify-center gap-2 md:hidden ">
                <Image src={jsImg} alt="javascript" className="w-full h-12 dark:bg-light" />
                <Image src={pythonImg} alt="python" className="w-full h-12 dark:bg-light" />
                <Image src={reactImg} alt="react" className="w-full h-12 dark:bg-light" />
                <Image src={mongoImg} alt="mongodb" className="w-full h-auto dark:bg-light" />
                <Image src={djangoImg} alt="next" className="w-full h-12 dark:bg-light" />
                <Image src={sqlImg} alt="next" className="w-full h-12 dark:bg-light" />
                <Image src={cssImg} alt="css" className="w-full h-12 dark:bg-light" />
                <Image src={htmlImg} alt="html" className="w-full h-12 dark:bg-light" />
                <Image src={nextImg} alt="next" className="w-full h-12 dark:bg-light" />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe  />
      </main>
    </>
  );
}
 
export async function getStaticProps(context){return {props:{textContent:['Dominic Mena', ' Software  Engineer', 'Business Operations']}}}