"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Ping from "ping.js";
import Head from "next/head";
import Link from "next/link";
import banner from "./banner.jpg";
import background from "./background.jpg";

export default function Home() {
  const [ping, setPing] = useState("측정 중...");
  const [users, setUsers] = useState("알 수 없음");
  const [pingData, setPingData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const p = new Ping();

    const fetchPing = async () => {
      const startTime = performance.now();
      try {
        await fetch("http://gd.globedkoreaserver.shop:4201", {
          mode: "no-cors",
        });
        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);
        setPing(latency + " ms");
        setPingData((prevData) => [
          ...prevData,
          { time: new Date().toLocaleTimeString(), ping: latency },
        ]);
      } catch (err) {
        setPing("오류");
      }
    };

    const fetchUsers = () => {
      fetch("/api/status")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.onlineUsers);
          setUsersData((prevData) => [
            ...prevData,
            { time: new Date().toLocaleTimeString(), users: data.onlineUsers },
          ]);
        })
        .catch(() => setUsers("오류"));
    };

    fetchPing(); 
    fetchUsers(); 
    const pingInterval = setInterval(fetchPing, 2000);
    const userInterval = setInterval(fetchUsers, 2000);

    return () => {
      clearInterval(pingInterval);
      clearInterval(userInterval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
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
            }}
          >
            정보
          </Link>
          <Link
            href="https://discord.gg/C5ZHxtMhTA"
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
          backgroundPositionX: "center",
          border: 0,
          padding: 0,
          margin: 0,
          aspectRatio: "3/1",
          width: "100vw",
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
        <h1>v.Beta0.1</h1>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "20px 30px",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
            fontSize: "1.2rem",
            color: "#e2e2e2",
            fontFamily: "consolas",
            marginBottom: "20px",
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

        <section
          style={{
            marginTop: "20px",
            color: "#cfd3ff",
            fontSize: "1.1rem",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            width: "80vw",
            whiteSpace: "normal",
          }}
        >
          <div style={{ textAlign: "center", width: "80vw" }}>
            <div>
              <p style={{ borderBottom: "20px" }}>ping: {ping}</p>
              <ResponsiveContainer
                style={{ paddingTop: "16px", paddingRight: "30px" }}
                className={"card"}
                width="100%"
                height="100%"
                minHeight={300}
              >
                <LineChart data={pingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                  <XAxis
                    dataKey="time"
                    stroke="#ccc"
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#ccc"
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    wrapperStyle={{
                      backgroundColor: "#333",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    labelStyle={{ fontWeight: "bold" }}
                    itemStyle={{ fontSize: "14px" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ping"
                    stroke="#82ca9d"
                    strokeWidth={5}
                    dot={{ r: 0 }}
                    activeDot={{
                      r: 6,
                      stroke: "#82ca9d",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center", width: "80vw" }}>
            <div>
              <p style={{ borderBottom: "20px" }}>
                connected user: {users}
              </p>
              <ResponsiveContainer
                style={{ paddingTop: "16px", paddingRight: "30px" }}
                className={"card"}
                width="100%"
                height="100%"
                minHeight={300}
              >
                <LineChart data={usersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                  <XAxis
                    dataKey="time"
                    stroke="#ccc"
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#ccc"
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    wrapperStyle={{
                      backgroundColor: "#333",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    labelStyle={{ fontWeight: "bold" }}
                    itemStyle={{ fontSize: "14px" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#82ca9d"
                    strokeWidth={5}
                    dot={{ r: 0 }}
                    activeDot={{
                      r: 6,
                      stroke: "#82ca9d",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
