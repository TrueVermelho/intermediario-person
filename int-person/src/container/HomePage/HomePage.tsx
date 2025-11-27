"use client";

import Header from "@/components/HomePage/body/Header/header";
import Home from "@/components/HomePage/body/Home/home";
import Sobre from "@/components/HomePage/body/Sobre/sobre";
import Cards from "@/components/services/cards/cards";
import Contato from "@/components/services/contato/contato";
import Mapa from "@/components/services/mapa/mapa";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Cards />
      <Contato />
      <Mapa />
    </>
  );
}
