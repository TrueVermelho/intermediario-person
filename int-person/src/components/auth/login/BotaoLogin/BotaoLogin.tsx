"use client";

import Link from "next/link";
import "./styleBotaoLogin.css";

export default function BotaoLogin() {
  return (
    <Link href="/login">
      <button className="BotaoLogin">Login</button>
    </Link>
  );
}
