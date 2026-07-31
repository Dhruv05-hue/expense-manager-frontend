import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function DailyExpenseChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-80 flex items-center justify-center text-gray-500">
        No daily expense data available.
      </div>
    );
  }

  const chartData = data.map((item) => ({
    date: item._id,
    amount: item.total,
  }));

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="date"
            tick={{
              fontSize: 12,
              fill: "#6B7280",
            }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{
              fontSize: 12,
              fill: "#6B7280",
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            formatter={(value) => [`₹ ${value}`, "Amount"]}
            cursor={{
              fill: "#F3F4F6",
            }}
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          />

          <Bar
            dataKey="amount"
            fill="#2563EB"
            radius={[10, 10, 0, 0]}
            maxBarSize={60}
            animationBegin={100}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}