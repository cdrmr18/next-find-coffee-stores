import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
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
        <div className={styles.heroImage}>
          <Image
            src="/images/coffee.svg"
            width={250}
            height={300}
            alt="girl relaxing"
          />
        </div>
      </main>
      <section className={styles.cardWrapper}>
        <Card
          name={"Coffee store name"}
          imgUrl="/images/relax.svg"
          href="/coffee-stores/store-name"
          className={styles.card}
        />
        <Card
          name={"Coffee store name"}
          imgUrl="/images/relax.svg"
          href="/coffee-stores/store-name"
          className={styles.card}
        />
        <Card
          name={"Coffee store name"}
          imgUrl="/images/relax.svg"
          href="/coffee-stores/store-name"
          className={styles.card}
        />
      </section>
    </div>
  );
}
