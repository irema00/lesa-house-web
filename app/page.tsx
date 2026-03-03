import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesa House | Coming Soon",
  description:
    "Lesa House is a boutique event house in İzmir, Bostanlı. Coming soon.",
};

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center", padding: 24 }}>
        <p
          style={{
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          İZMİR• Bostanlı
        </p>
        <h1 style={{ margin: "16px 0", letterSpacing: "0.22em" }}>
          LESA HOUSE
        </h1>
        <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
          A boutique event house designed for special moments.
          <br />
          <span>Coming soon.</span>
        </p>
      </div>
    </main>
  );
}
