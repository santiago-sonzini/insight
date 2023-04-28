import { NextPageContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "~/components/loading";
import Sections from "~/components/section";

const Store: NextPage = ({site}: any) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/products/${site}`)
            const json = await res.json()
            setData(json)
            setLoading(false)
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
    fetchData()
     
  }, []);
  return (
    <>
      {
        loading
        ?
        <Loading/>
        :
        <>
          <Head>
          <title> {site.charAt(0).toUpperCase() + site.slice(1)}</title>
          <meta name="description" content={site.charAt(0).toUpperCase() + site.slice(1) + ", popular porducts page"} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center  bg-gradient-to-r from-blue-300 to-cyan-400">
          <div className="container flex flex-col items-center justify-center  px-4 py-16 ">
            <Sections data={data}/>
                
          </div>
        </main>
        </>
      }
    </>
  );
};
export default Store;



export async function getServerSideProps(context: any) {
    return {
      props: {site: context.params.id}, // will be passed to the page component as props
    }
  }