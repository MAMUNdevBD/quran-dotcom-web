import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import CopyrightSection from "../../components/CopyrightSection";
import CourseHeroSection from "../../components/course/HeroSection";
import UspSection from "../../components/course/UspSection";
import CourseList from "../../components/course/CourseList";
import Reasons from "../../components/course/Reasons";
import Testemonial from "../../components/course/Testemonial";

const CourseHomePage = () => {
  return (
    <>
      <Head>
        <title>Studerakoranen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-inter bg-color1 overflow-x-hidden">
        <TopBar />
        <NavBar />
        <CourseHeroSection />
        <p className="text-white container text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or
        </p>
        <UspSection />
        <CourseList />
        <Reasons />
        <Testemonial />
        <Footer />
        <CopyrightSection />
      </main>
    </>
  );
};

export default CourseHomePage;
