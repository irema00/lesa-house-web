import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Lesa House | Coming Soon",
  description:
    "Lesa House is a boutique event house in İzmir, Bostanlı. Coming soon.",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.frame} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>İZMİR • Bostanlı</p>

        <img
          src="/lesahouselogo.svg"
          alt="Lesa House"
          className={styles.logo}
          draggable={false}
        />

        <p className={styles.subtitle}>
          A boutique event house designed for special moments.
          <br />
          <span>Coming soon.</span>
        </p>
      </div>
    </main>
  );
}
