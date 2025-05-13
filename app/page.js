"use client";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import banner from "./banner.jpg";
import background from "./background.jpg";
import Image from "next/image";

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
        <div
          style={{
            color: "#d1d1d1",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "consolas",
          }}
        >
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
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "60px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p style={{ opacity: 0.8 }}>
          이 서버는 dank_meme에 의해 만들어지거나 승인받지 않았습니다.
        </p>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            padding: "20px",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            margin: "20px 0",
            fontSize: "1.5rem",
            color: "#e2e2e2",
            fontFamily: "monospace",
            wordBreak: "break-word",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.5), 0 0 16px rgba(255, 255, 255, 0.3)",
          }}
        >
          http://gd.globedkoreaserver.shop/
        </div>

        <h1 style={{ marginTop: "20px" }}>v.Beta0.1</h1>
        <div style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
          Since 2025.01.27
        </div>

        <Link
          href="https://gelatinous-glazer-cf4.notion.site/Globed-Korea-Server-1887b21aa01b80279f63cf5eef30cf92"
          style={{
            marginTop: "24px",
            padding: "10px 20px",
            border: "1px dashed white",
            borderRadius: "10px",
            color: "white",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffffff11")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          서버에 대한 정보 (필독)
        </Link>

        <hr style={{ width: "60%", margin: "40px auto", opacity: 0.2 }} />

        <big style={{ fontSize: "1.4rem" }}>서버 사양</big>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li>
            <strong>CPU:</strong> Intel Celeron N4505 (2코어, 2.0GHz)
          </li>
          <li>
            <strong>RAM:</strong> 8GB DDR4 SODIMM
          </li>
          <li>
            <strong>Ethernet Cable:</strong> CAT7
          </li>
        </ul>

        <hr style={{ width: "60%", margin: "40px auto", opacity: 0.2 }} />
        <Section
          titleImage="Owner"
          names="이연우"
          avatars={["./imgs/role-owner.png"]}
          images={["./imgs/1.png"]}
        />
        <Section
          titleImage="Developer"
          names="frostie, 이연우"
          avatars={["./imgs/role-dev.png"]}
          images={[
            "data:image/png;base64,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",
            "./imgs/1.png",
          ]}
        />
        <Section
          titleImage="First Connection"
          names="DDOS"
          avatars={["./imgs/role-cc1-winner.png"]}
          images={[
            "./imgs/4-new.png",
          ]}
        />
        <Section
          titleImage="Supporter"
          names="DDOS, Ulbo767"
          avatars={["./imgs/role-supporter.png"]}
          images={[
            "data:image/png;base64,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",
            "data:image/png;base64,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",
          ]}
        />
        <Section
          titleImage="Moderator"
          names="이연우, frostie, DDOS"
          avatars={["./imgs/role-mod.png"]}
          images={[
            "./imgs/1.png",
            "data:image/png;base64,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",
            "./imgs/4-new.png",
          ]}
        />

        <Section
          titleImage="Admin"
          names="Ulbo767"
          avatars={["./imgs/role-admin.png"]}
          images={[
            "data:image/png;base64,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",
          ]}
        />
        <hr style={{ width: "60%", margin: "40px auto", opacity: 0.2 }} />
        <br />
        <Image
          src="/imgs/globedmainmenu.png"
          alt="Globed Main Menu"
          width="0"
          height="0"
          sizes="80vw"
          style={{ width: "80%", height: "auto" }}
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
        <h1>{titleImage}</h1>
        {avatars.map((src, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url('${src}')`,
              height: "50px",
              width: "50px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "50%",
              filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))",
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
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))",
            }}
          />
        ))}
      </div>
    </>
  );
}
