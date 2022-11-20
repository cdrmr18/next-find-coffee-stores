import { useState } from "react";
import Head from "next/head";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [btnText, setBtnText] = useState("View stores nearby");

  const onClickButtonHandler = () => {
    setBtnText("Loading");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={btnText} handleOnClick={onClickButtonHandler} />
      </main>
    </div>
  );
}
