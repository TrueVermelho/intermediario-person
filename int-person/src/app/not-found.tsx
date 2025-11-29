import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0d1117",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#161b22",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.35)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#ff6363",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "24px",
            color: "#fafafa",
            marginBottom: "10px",
          }}
        >
          Página não encontrada
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#9ca3af",
            marginBottom: "30px",
          }}
        >
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#238636",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600,
            transition: "0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#2ea043")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#238636")
          }
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
