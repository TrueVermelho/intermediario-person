"use client";

import Header from "@/components/body/Header/header";
import Home from "@/components/body/Home/home";
import Servicos from "@/components/body/Servicos/servicos";
import Sobre from "@/components/body/Sobre/sobre";
import Contato from "@/components/services/contato/contato";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Servicos />
      <Contato />
    </>
  );
}
