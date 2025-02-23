export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(
      "http://gd.globedkoreaserver.shop:4201/public/players?period=minute"
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch data" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
