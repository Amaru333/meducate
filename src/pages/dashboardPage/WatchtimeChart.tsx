"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const chartData = [
  { labelName: "Watched", watchtime: 275, fill: "var(--color-chromea)" },
  { labelName: "Remaining", watchtime: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  watchtime: {
    label: "Visitors",
  },
  chromea: {
    label: "Chrome",
    color: "#566cd2",
  },
  safari: {
    label: "Safari",
    color: "#566cd21D",
  },
} satisfies ChartConfig;

export function WatchtimeChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.watchtime, 0);
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <p className="text-2xl font-semibold pb-6">Your weekly goal</p>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="watchtime" nameKey="labelName" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                          {totalVisitors.toLocaleString()} <tspan className="text-xs">mins</tspan>
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Watchtime
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
