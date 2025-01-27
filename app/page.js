import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#1a202c", color: "white", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#2d3748", padding: "16px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <nav style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Link href="" style={{ color: "#a0aec0", textDecoration: "none", transition: "color 0.2s" }}>정보</Link>
          <Link href="" style={{ color: "#a0aec0", textDecoration: "none", transition: "color 0.2s" }}>디스코드</Link>
        </nav>
      </header>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "64px 16px" }}>
        <big>Since 2025.01.27</big>
        <small>Frontend by 이연우<br></br>Backend by QuverT</small>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Globed 한국서버</h2>
        <code style={{ backgroundColor: "#4a5568", padding: "8px", borderRadius: "8px" }}>http://yeonwoo.gmd.jotgosu</code>
        <p style={{ marginTop: "16px", color: "#cfd3ff" }}>현재 접속자 : ??</p>
      </main>
    </div>
  );
}