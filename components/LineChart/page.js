import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const LineChartComponent = () => {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    fetch("http://gd.globedkoreaserver.shop:4201/public/players?period=minute")
      .then((response) => response.json())
      .then((data) => {
        const extractedData = data.data.map((item) => ({
          log_time: item.log_time,
          count: item.count,
        }));
        setLogData(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  return (
    <LineChart width={600} height={300} data={logData}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="log_time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
