"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (<>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  );
}
