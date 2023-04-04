import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/d1.jpeg";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Mena | Portfolio </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full p-20">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="DominicMena"
                className="w-auto h-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Dominic Mena"
                className="!text-left !font-bold !text-4xl"
              />

              <AnimatedText
                text="Software  Engineer"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Full stack application experience w/ JavaScript, Python, React,
                REST API, PostgreSQL & more. Committed to creative
                problem-solving, clear communication, & meticulous attention to
                detail.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center text-light p-2.5 px-6
          rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
          border=2 border-solid border-transparent hover:border-dark
          "
                  style={{ backgroundColor: "#8B0000" }}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mena.dominic@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
              <div className="relative right-0 top-20 w-12 flex flex-row justify-center gap-2">
                <Image src={jsImg} alt="javascript" className="w-full h-12" />
                <Image src={pythonImg} alt="python" className="w-full h-12" />
                <Image src={reactImg} alt="react" className="w-full h-12" />
                <Image src={mongoImg} alt="mongodb" className="w-full h-auto" />
                <Image src={djangoImg} alt="next" className="w-full h-12" />
                <Image src={sqlImg} alt="next" className="w-full h-12" />
                <Image src={cssImg} alt="css" className="w-full h-12" />
                <Image src={htmlImg} alt="html" className="w-full h-12" />
                <Image src={nextImg} alt="next" className="w-full h-12" />
              </div>
            </div>
          </div>
          <Footer />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
