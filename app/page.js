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
        <div className="divider" />
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
        <br />
        <Link
          style={{
            color: "white",
            padding: "10px",
            border: "#ffffff solid 1px",
            borderRadius: "10px",
            textDecorationStyle: "dashed",
          }}
          href={
            "https://gelatinous-glazer-cf4.notion.site/Globed-Korea-Server-1887b21aa01b80279f63cf5eef30cf92"
          }
        >
          서버에 대한 정보 (필독)
        </Link>
        <div className="divider" />
        <big>서버 사양</big>
        <ul>
          <li>
            <strong>CPU</strong>: Intel Celeron N4505 (4코어, 2.0GHz)
          </li>
          <li>
            <strong>RAM</strong>: 8GB DDR4 SODIMM
          </li>
          <li>
            <strong>Ethernet Cable</strong>: CAT7
          </li>
        </ul>

        <div className="divider" />

        <Section
          titleImage="./imgs/modtext.png"
          names="이연우, QuverT, DDOS"
          avatars={["./imgs/KakaoTalk_20250405_215329281_01.jpg"]}
          images={[
            "./imgs/1.png",
            "data:image/png;base64,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",
            "./imgs/4.png",
          ]}
        />

        <Section
          titleImage="./imgs/admintext.png"
          names="Ulbo767"
          avatars={["./imgs/KakaoTalk_20250405_215329281.jpg"]}
          images={[
            "data:image/png;base64,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",
          ]}
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
        <div className="divider" />
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
