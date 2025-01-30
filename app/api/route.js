import ping from "ping";
export async function GET() {
  try {
    const res = await ping.promise.probe("118.44.109.78", { timeout: 10 });
    return new Response(
      JSON.stringify({
        success: true,
        ping: res.time ?? "unknown",
        alive: res.alive,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
