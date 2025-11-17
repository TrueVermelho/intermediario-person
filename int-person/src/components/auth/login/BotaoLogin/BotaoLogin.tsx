"use client";

import Link from "next/link";
import "./styleButton.css";

export default function LoginButton() {
  return (
    <Link href="/login">
      <button className="BotaoLogin">Login</button>
    </Link>
  );
}
