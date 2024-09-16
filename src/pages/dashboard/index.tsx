import styles from "@/pages/dashboard/styles.module.css";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Dashboard(){
    return(
        <div className={styles.container}>
            <Head>My Tasks Panel</Head>
            <h1>Panel Page</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if(!session?.user){
        return{
            redirect:{
                destination: '/',
                permanent: false,
            },
        };
    }

    return{
        props: {},
    };
};