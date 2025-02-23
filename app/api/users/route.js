export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://gd.globedkoreaserver.shop:4201/public/players?period=minute"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
