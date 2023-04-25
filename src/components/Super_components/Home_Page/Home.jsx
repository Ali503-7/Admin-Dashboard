import React from "react";
import { Header } from "../Header/Header";
import { Section_1 } from "../Section_1/Section_1";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="container my-[65px]">
        <Section_1 />
      </main>
    </>
  );
};
