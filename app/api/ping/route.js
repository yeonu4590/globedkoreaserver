import ping from "ping";

export async function GET() {
  const host = "118.44.109.78";
  try {
    const result = await ping.promise.probe(host);
    const pingTime =
      result.time !== "unknown" ? `${result.time} ms` : "측정 실패";

    return new Response(JSON.stringify({ ping: pingTime }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Ping failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
