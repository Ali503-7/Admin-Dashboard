import React from "react";
import { Header } from "../Header/Header";
import { Section_1 } from "../../Sections/Section_1/Section_1";
import Section_2 from "../../Sections/Section_2/Section_2";
export const Home = () => {
  return (
    <>
      <Header />
      <main className="my-[65px] overflow-hidden">
        <Section_1 />
        <Section_2 />
      </main>
    </>
  );
};
