"use client";

import Header from "@/components/body/Header/header";
import Home from "@/components/body/Home/home";
import Sobre from "@/components/body/Sobre/sobre";
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
