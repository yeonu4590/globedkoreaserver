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
          names="QuverT, 이연우"
          avatars={["./imgs/role-dev.png"]}
          images={[
            "data:image/png;base64,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",
            "./imgs/1.png",
          ]}
        />
        <Section
          titleImage="Supporter"
          names="DDOS, Ulbo767"
          avatars={["./imgs/role-supporter.png"]}
          images={[
            "./imgs/4-new.png",
            "data:image/png;base64,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",
          ]}
        />
        <Section
          titleImage="Moderator"
          names="이연우, QuverT, DDOS"
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
