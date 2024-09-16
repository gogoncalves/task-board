import Head from "next/head";
import Image from "next/image";
import styles from "@/../../styles/home.module.css";
import heroImg from "@/../public/assets/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks+</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image 
            className={styles.hero}
            alt="Task+ Logo"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas!
        </h1>
      </main>
    </div>
  );
}
