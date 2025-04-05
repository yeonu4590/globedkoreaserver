import ping from 'ping';

export async function GET() {
  try {
    const result = await ping.promise.probe('gd.globedkoreaserver.shop');
    return new Response(JSON.stringify({ time: result.time }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Ping failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
