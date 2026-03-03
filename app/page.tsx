"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "tr" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <main className={styles.page}>
      <div className={styles.frame} />
      <div className={styles.langSwitch}>
        <button
          type="button"
          onClick={() => setLang("tr")}
          className={`${styles.langBtn} ${
            lang === "tr" ? styles.activeLang : ""
          }`}
        >
          TR
        </button>
        <span aria-hidden="true">|</span>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`${styles.langBtn} ${
            lang === "en" ? styles.activeLang : ""
          }`}
        >
          EN
        </button>
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>İZMİR • Bostanlı</p>

        <img
          src="/lesahouselogo.svg"
          alt="Lesa House"
          className={styles.logo}
          draggable={false}
        />

        <p className={styles.subtitle}>
          {lang === "en"
            ? "A boutique event house designed for special moments."
            : "Özel anlar için tasarlanmış butik bir etkinlik evi."}
        </p>
        <p className={styles.comingSoon}>
          {lang === "en" ? "Coming soon." : "Çok yakında."}
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primaryCta}
            href="mailto:rezervasyon@lesahouse.com"
          >
            {lang === "en" ? "Reservation" : "Rezervasyon"}
          </a>

          <a
            className={styles.secondaryLink}
            href="https://instagram.com/lesa.house"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <p className={styles.contact}>
            {lang === "en" ? "Contact: " : "İletişim: "}
            <a href="mailto:info@lesahouse.com">info@lesahouse.com</a>
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Lesa House
      </footer>
    </main>
  );
}
