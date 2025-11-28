"use client";

import Footer from "@/components/HomePage/body/Footer/Footer";
import Header from "@/components/HomePage/body/Header/header";
import Home from "@/components/HomePage/body/Home/home";
import Sobre from "@/components/HomePage/body/Sobre/sobre";
import Cards from "@/components/HomePage/services/cards/cards";
import Contato from "@/components/HomePage/services/contato/contato";
import Mapa from "@/components/HomePage/services/mapa/mapa";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Cards />
      <Contato />
      <Mapa />
      <Footer />
    </>
  );
}
