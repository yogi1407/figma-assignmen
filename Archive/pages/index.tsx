import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Footer from "./footer";
import { Button } from "antd";
import "antd/dist/antd.css";
import Header1 from "./header1";
import HeaderTwo from "./headerTwo";
import HeaderThree from "./headerThree";
import HeaderFour from "./headerFour";
import BodyOne from "./bodyOne";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header1 />
      <HeaderTwo />
      <HeaderThree />
      <HeaderFour />
      <BodyOne />
      <Footer />
    </div>
  );
};

export default Home;
