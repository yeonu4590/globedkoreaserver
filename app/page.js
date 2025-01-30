"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import banner from "./banner.jpg";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [pingTime, setPingTime] = useState("측정 중...");
  const [pingData, setPingData] = useState([]);
  const [timeLabels, setTimeLabels] = useState([]);

  useEffect(() => {
    async function fetchPing() {
      try {
        const response = await fetch("api");
        const data = await response.json();
        if (data.success) {
          setPingTime(`${data.ping}ms`);
          setPingData((prev) => [...prev, data.ping]);
          setTimeLabels((prev) => [...prev, new Date().toLocaleTimeString()]);
        } else {
          setPingTime("측정 실패");
        }
      } catch (error) {
        setPingTime("에러 발생");
      }
    }

    fetchPing();
    const interval = setInterval(fetchPing, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: "Ping Time (ms)",
        data: pingData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#1a202c", color: "white", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#2d3748",
          padding: "16px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Link
            href="https://gelatinous-glazer-cf4.notion.site/Globed-1887b21aa01b80279f63cf5eef30cf92?pvs=4"
            style={{
              color: "#a0aec0",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            정보
          </Link>
          <Link
            href="https://discord.gg/C5ZHxtMhTA"
            style={{
              color: "#a0aec0",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            디스코드
          </Link>
        </nav>
      </header>
      <Image src={banner} alt="배너" style={{ width: "100%", height: "auto" }} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "64px 16px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Globed 한국서버
        </h2>
        <big>Since 2025.01.27</big>
        <small>
          Website by 이연우
          <br />
          Server by QuverT
        </small>
        <br />
        <h3>서버 URL (강원특별자치도 원주시)</h3>
        <code
          style={{
            backgroundColor: "#4a5568",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          http://yeonwoo.gmd.jotgosu
        </code>
        <span style={{ marginTop: "16px", color: "#cfd3ff", fontWeight: "bold" }}>
          현재 접속자 : ??
        </span>
        <span
          style={{
            marginTop: "16px",
            color: "#cfd3ff",
            fontWeight: "bold",
          }}
        >
          ping: {pingTime}
        </span>
        <div style={{ width: "100%", maxWidth: "600px", marginTop: "40px" }}>
          <Line data={data} />
        </div>
      </main>
    </div>
  );
}
