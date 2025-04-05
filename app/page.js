"use client";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import banner from "./banner.jpg";
import background from "./background.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        fontFamily: "'Roboto', sans-serif",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Globed Korea Server</title>
        <meta
          property="og:url"
          content="http://gd.globedkoreaserver.shop:4201"
        />
        <meta
          name="google-site-verification"
          content="A5xXpJo-JckIPvkOE6MLLILgGviKKsMNH50eTy9_74E"
        />
        <meta
          name="naver-site-verification"
          content="13ea3d8a2959e4eb2dbbdf60d24691e71300fcec"
        />
      </Head>

      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#1f1f1f",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#d1d1d1", fontSize: "24px", fontWeight: "600" }}>
          Globed Korea Server
        </div>
        <nav style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
          {[
            {
              name: "정보",
              url: "https://gelatinous-glazer-cf4.notion.site/Globed-Korea-Server-1887b21aa01b80279f63cf5eef30cf92",
            },
            {
              name: "유튜브",
              url: "https://www.youtube.com/@GlobedKoreaServer",
            },
            { name: "디스코드", url: "https://discord.com/invite/C5ZHxtMhTA" },
            {
              name: "투네이션",
              url: "https://toon.at/donate/globedkoreaserve",
            },
          ].map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              style={{
                color: "#d1d1d1",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </header>

      {/* BANNER */}
      <section
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          aspectRatio: "3 / 1",
        }}
      />

      {/* DISCORD WIDGET */}
      <iframe
        src="https://discord.com/widget?id=1333348250131890219&theme=dark"
        width="100%"
        height="400"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{
          maxWidth: "100%",
          borderRadius: "0px",
        }}
      ></iframe>

      {/* MAIN CONTENT */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 20px",
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundAttachment: "fixed",
        }}
      >
        <p>이 서버는 dank_meme에 의해 만들어지거나 승인받지 않았습니다.</p>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "90%",
            maxWidth: "600px",
            padding: "20px",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
            fontSize: "1.5rem",
            color: "#e2e2e2",
            fontFamily: "consolas",
            wordBreak: "break-word",
          }}
        >
          http://gd.globedkoreaserver.shop:4201
        </div>

        <h1>v.Beta0.1</h1>
        <div style={{ fontSize: "1.3rem" }}>Since 2025.01.27</div>
        <small style={{ fontSize: "0.9rem" }}>
          Owner : 이연우
          <br />
          Developer : QuverT, 이연우
        </small>

        <div className="divider" />

        <Section
          titleImage="./imgs/modtext.png"
          names="이연우, QuverT, DDOS"
          avatars={["./imgs/KakaoTalk_20250405_215329281_01.jpg"]}
          images={["./imgs/1.png", "./imgs/2.png", "./imgs/4.png"]}
        />

        <Section
          titleImage="./imgs/admintext.png"
          names="Ulbo767"
          avatars={["./imgs/KakaoTalk_20250405_215329281.jpg"]}
          images={["./imgs/3.png"]}
        />
        <br />
        <Script
          src="https://apis.google.com/js/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="g-ytsubscribe"
          data-channelid="UCotH0xSYNno4_C-cFL9t1Sg"
          data-layout="default"
          data-count="default"
        />
      </main>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#1f1f1f",
          color: "#d1d1d1",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>&copy; 2025 Globed Korea Server. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function Section({ titleImage, names, avatars, images }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${titleImage}')`,
            height: "50px",
            width: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        {avatars.map((src, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url('${src}')`,
              height: "50px",
              width: "50px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>{names}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
            }}
          />
        ))}
      </div>
    </>
  );
}
