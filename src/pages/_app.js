import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Sorts_Mill_Goudy } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: '400',
});

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${sortsMillGoudy.variable} font-serif bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  );
}
