"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body
        style={{
          padding: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Ocorreu um erro inesperado</h1>

        <p>{error.message}</p>

        <button
          onClick={() => reset()}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#238636",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Tentar novamente
        </button>
      </body>
    </html>
  );
}
