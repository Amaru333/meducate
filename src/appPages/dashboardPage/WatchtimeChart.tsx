"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import httpRequest from "@/utils/httpRequest";
import { WEEKLY_WATCHTIME_ENDPOINT } from "@/constants/APIRoutes";

const chartConfig = {
  watchtime: {
    label: "Visitors",
  },
  watched: {
    label: "Watched",
    color: "#566cd2",
  },
  remaining: {
    label: "Remaining",
    color: "#566cd21D",
  },
} satisfies ChartConfig;

function WatchtimeChart() {
  const [weeklyWatchtime, setWeeklyWatchtime] = React.useState(0);
  React.useEffect(() => {
    httpRequest
      .get(WEEKLY_WATCHTIME_ENDPOINT)
      .then((res) => {
        setWeeklyWatchtime(parseInt(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const chartData = [
    { labelName: "Watched", watchtime: weeklyWatchtime, fill: "var(--color-watched)" },
    { labelName: "Remaining", watchtime: 500 - weeklyWatchtime, fill: "var(--color-remaining)" },
  ];
  // const totalVisitors = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.watchtime, 0);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
                          {weeklyWatchtime} <tspan className="text-xs">mins</tspan>
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

export default WatchtimeChart;
