"use client";
import Head from "next/head";
import Link from "next/link";
import banner from "./banner.jpg";
import background from "./background.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
        width: "100%",
        height: "100%",
        frameBorder: "0",
        boxSizing: "border-box",
      }}
    >
      <Head>
        <title>Globed Korea Server - Beta 0.1</title>
        <meta
          name="description"
          content="Globed Korea Server의 공식 웹사이트입니다. 서버 상태 및 정보를 확인하세요."
        />
        <meta
          name="keywords"
          content="Globed Korea, 게임 서버, 지오메트리대쉬, 서버 상태, 디스코드"
        />
        <meta name="author" content="이연우 & QuverT" />
        <meta property="og:title" content="Globed Korea Server" />
        <meta
          property="og:description"
          content="Globed Korea Server의 공식 웹사이트입니다."
        />
        <meta property="og:image" content="/banner.jpg" />
        <meta
          property="og:url"
          content="http://gd.globedkoreaserver.shop:4201"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="A5xXpJo-JckIPvkOE6MLLILgGviKKsMNH50eTy9_74E"
        />
        <meta
          name="naver-site-verification"
          content="13ea3d8a2959e4eb2dbbdf60d24691e71300fcec"
        />
      </Head>

      <iframe
        src="https://discord.com/widget?id=1333348250131890219&theme=dark"
        width="100%"
        height="400"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{
          maxWidth: "100%",
          borderRadius: "0px",
          overflow: "hidden",
          marginTop: "20px", // Added margin for spacing
        }}
      ></iframe>

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
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            fontSize: "16px",
          }}
        >
          <Link
            href="https://gelatinous-glazer-cf4.notion.site/Globed-Korea-Server-1887b21aa01b80279f63cf5eef30cf92"
            style={{
              color: "#d1d1d1",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
              fontSize: "4vw",
            }}
          >
            정보
          </Link>
          <Link
            href="https://www.youtube.com/@GlobedKoreaServer"
            target="_blank"
            style={{
              color: "#d1d1d1",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
              fontSize: "4vw",
            }}
          >
            유튜브
          </Link>
        </nav>
      </header>

      <section
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPositionX: "center",
          border: 0,
          padding: 0,
          margin: 0,
          aspectRatio: "3/1",
          width: "100%",
          backgroundSize: "cover",
        }}
      />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 80px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <iframe
          src="https://joey.team/block?block_id=BwJ3v9s1PWAqq9ztZce7&id=mv0F2LvnZURoK35r6CH7CmBjLwr2"
          width={"80%"}
          height={130}
          frameBorder="0"
          style={{
            borderRadius: "8px",
            scale: "1.2",
            marginBottom: "40px", // v.Beta0.1과 iframe 사이의 거리
          }}
        ></iframe>
        <h1>v.Beta0.1</h1>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "100%",
            padding: "40px",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
            fontSize: "2rem",
            color: "#e2e2e2",
            fontFamily: "consolas",
            marginBottom: "40px", // 배너와 iframe 사이의 거리
          }}
        >
          http://gd.globedkoreaserver.shop:4201
        </div>

        <big
          style={{
            color: "#a0aec0",
            marginTop: "15px",
            fontSize: "1rem",
          }}
        >
          Since 2025.01.27
        </big>
        <small
          style={{
            color: "#a0aec0",
            marginTop: "10px",
            fontSize: "0.9rem",
          }}
        >
          Frontend by 이연우
          <br />
          Backend by QuverT
        </small>
      </main>
    </div>
  );
}
