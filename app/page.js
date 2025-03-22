"use client";
import Head from "next/head";
import Link from "next/link";
import banner from "./banner.jpg";
import Script from "next/script";
import background from "./background.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
        width: "100%",
        boxSizing: "border-box",
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
          <Link
            href="https://gelatinous-glazer-cf4.notion.site/Globed-Korea-Server-1887b21aa01b80279f63cf5eef30cf92"
            style={{
              color: "#d1d1d1",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
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
            }}
          >
            유튜브
          </Link>
          <Link
            href="https://discord.com/invite/C5ZHxtMhTA"
            target="_blank"
            style={{
              color: "#d1d1d1",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            디스코드
          </Link>
        </nav>
      </header>

      <section
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          aspectRatio: "3/1",
        }}
      />

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
        }}
      ></iframe>

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
          minHeight: "calc(100vh - 1000px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundAttachment: "fixed",
        }}
      >
        <big>이 서버는 dank_meme에 의해 만들어지거나 승인받지 않았습니다.</big>
        <br />
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
        <div style={{ color: "#a0aec0", fontSize: "1rem" }}>
          Since 2025.01.27
        </div>
        <small style={{ color: "#a0aec0", fontSize: "0.9rem" }}>
          Owner : 이연우
          <br />
          Developer : QuverT, 이연우
        </small>
        <br />
        <small style={{ color: "#a0aec0", fontSize: "0.9rem" }}>
          Mod : 이연우, QuverT, DDOS
          <br />
          Admin : Ulbo767
        </small>
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
        ></div>
        <br />

        <section
          style={{
            background: "#1e1e1e", // dark background
            width: "80vw",
            color: "white", // text color adjusted for dark mode
            borderRadius: "10px", // rounded corners
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // deeper shadow for dark mode
            padding: "20px",
            margin: "20px auto", // centering the section
          }}
        >
          <div
            style={{
              height: "100px",
              background: "#333", // darker header background for contrast
              borderRadius: "8px", // rounded corners
              display: "flex",
              justifyContent: "center", // centering text
              alignItems: "center", // centering text vertically
              color: "white", // light text on dark background
            }}
          >
            <big style={{ fontSize: "2rem", margin: "0" }}>
              항상 후원 너무 감사드립니다
            </big>
          </div>
          <div
            style={{
              textAlign: "center", // centering the content
              marginTop: "20px",
            }}
          >
            <big>
              <big>
                <Link
                  href={"https://toon.at/donate/globedkoreaserve"}
                  style={{
                    color: "#fff", // bright blue for contrast
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    padding: "10px 20px", // add some padding for a button-like feel
                    borderRadius: "5px", // rounded corners for a smooth look
                    backgroundColor: "#333", // dark background for dark mode
                    border: "1px solid #444", // subtle border for visibility
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // slight shadow for depth
                    transition: "background-color 0.3s, box-shadow 0.3s", // smooth transition on hover
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#444"; // slightly lighter on hover
                    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; // deeper shadow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#333"; // revert back to dark background
                    e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)"; // revert shadow
                  }}
                >
                  투네이션
                </Link><br />
              </big>
            </big>
            <br />
          </div>
          <iframe
            width={"80%"}
            frameBorder="0"
            src="https://toon.at/widget/donation_goal/aa01d12e98b9aa672e50848c45dab559"
          ></iframe>
          <br />
          <iframe
            width={"80%"}
            frameBorder="0"
            src="https://toon.at/widget/ranking/aa01d12e98b9aa672e50848c45dab559"
          ></iframe>
          <br />
          <iframe
            width={"80%"}
            frameBorder="0"
            src="https://toon.at/widget/wallpaper/aa01d12e98b9aa672e50848c45dab559"
          ></iframe>
        </section>
      </main>

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
