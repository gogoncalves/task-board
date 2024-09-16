import styles from "@/pages/dashboard/styles.module.css";
import Head from "next/head";

export default function Dashboard(){
    return(
        <div className={styles.container}>
            <Head>My Tasks Panel</Head>
            <h1>Panel Page</h1>
        </div>
    );
}
