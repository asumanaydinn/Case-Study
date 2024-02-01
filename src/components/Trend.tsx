import fakeData from "@/lib/generateTrendData";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const Trend = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={fakeData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="0"
          horizontal
          vertical={false}
          stroke="#C4C4C4"
          strokeOpacity={0.3}
        />
        <XAxis
          dataKey="today"
          tickMargin={10}
          className="text-gray-400 text-xs"
        />
        <YAxis
          tickMargin={10}
          orientation="right"
          className="text-gray-400 text-xs"
          type="number"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="today"
          stackId="1"
          stroke="#3751FF"
          fill="#3751FF"
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="yesterday"
          stackId="1"
          stroke="#DFE0EB"
          fill="#DFE0EB"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Trend;
