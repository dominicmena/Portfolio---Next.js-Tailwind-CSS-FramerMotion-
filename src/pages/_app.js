import "@/styles/globals.css";
import { Sorts_Mill_Goudy } from "next/font/google";
import Head from "next/head";
import NavBar from "./components/NavBar";


const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: '400',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${sortsMillGoudy.variable} font-serif bg-light w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
      </main>
    </>
  );
}
