import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import profilePic from '../../public/images/profile/d1.jpeg'
import Image from "next/image";
import Skills from './components/Skills'
import Experience from "./components/Experience";
import { AnimatePresence } from "framer-motion";
import Education from "./components/Education";

const { default: Head } = require("next/head"); 

const About = () => {
  return (
    <> 
      <Head>
        <title>Dominic Mena | About Page</title> 
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Always learning, always creating, always improving."
            className="!mb-2 !text-lg text-center dark:text-light"
          />
          <div className="grid w-full grid-cols-6 gap-16 items-center">
            <div className="p-20 col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-1 mt-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography:
              </h2>
              <p className="my-3 font-medium flex flex-wrap mr-20">
                Dominic Mena was born and raised in El, Paso TX - A lifelong
                learner, he recieved his B.A. in Philosophy from Arizona State
                and went on to work for DoorDash in it's start-up days - scaling
                up multiple facets of the company for 5+ years. When not
                building new coding projects; Writing music, running, & reading
                are favorite pastimes.
              </p>
            </div>
            <div className="col-span-2 relative h-max rounded-[2rem] border-2 border-solid border-dark bg-light p-9 dark:bg-dark dark:border-light">
                <div className="absolute top-2 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
            <Image src={profilePic} alt='Dominic' className='w-full h-auto rounded-2xl'              priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'/>
            </div>
          </div>
          <Skills/>
          <Experience/>
        <Education/>

        </Layout>
      </main>
    </>
  );
};

export default About;
