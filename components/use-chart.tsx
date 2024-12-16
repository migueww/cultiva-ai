"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"

const chartConfig = {
  batata: {
    label: "Batata",
    color: "hsl(var(--chart-1))",
  },
  cenoura: {
    label: "Cenoura",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
type ChartData = {
  label: string;
  [key: string]: number | string;
};

type PolygonalChartProps = {
  title: string;
  description: string;
  data: ChartData[];
};

export function PolygonalChart({ title, description, data }: PolygonalChartProps) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const getCSSColors = () => {
      const style = getComputedStyle(document.documentElement);
      const extractedColors = [];
      for (let i = 1; i <= 5; i++) {
        extractedColors.push(`hsl(${style.getPropertyValue(`--chart-${i}`).trim()})`);
      }
      return extractedColors;
    };

    setColors(getCSSColors());
  }, []);

  const keys = Object.keys(data[0]).filter((key) => key !== "label");

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={data}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="label" />
            <PolarGrid />
            {keys.map((key, index) => (
              <Radar
                key={key}
                dataKey={key}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.6}
              />
            ))}
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Aumento de 5.2% nesse mês<TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Julho - Dezembro 2024
        </div>
      </CardFooter>
    </Card>
  )
}
