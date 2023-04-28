import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "~/components/loading";
import Sections from "~/components/section";

const Home: NextPage = () => {
  
  return (
    <>
      {
       
        <>
          <Head>
          <title>Eccomerce Insight`s</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex h-screen flex-col items-center justify-center  bg-gradient-to-r from-blue-300 to-cyan-400">

<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16  text-center">
  <h1 className="text-4xl font-bold tracking-tight   text-white sm:text-6xl">
  Insight`s
  </h1>
  <p className="mt-6 text-lg leading-8 text-white w-1/2">
     Eccomerce data insight`s
    </p>
    <Link
      className="rounded-md px-9 py-5 md:px-5 md:py-4 text-sm  border-2 border-white font-bold  duration-150 ease-in text-white hover:bg-cyan-400 hover:shadow-blue-300 hover:text-white"
      href="/stores/amazon"
    >
      Amazon popular products
    </Link>
 
  
</div>
</main>
        </>
      }
    </>
  );
};




export default Home;



