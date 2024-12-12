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

const chartData = [
  { month: "January", batata: 200, cenoura: 80 },
  { month: "February", batata: 305, cenoura: 200 },
  { month: "March", batata: 237, cenoura: 120 },
  { month: "April", batata: 73, cenoura: 190 },
  { month: "May", batata: 209, cenoura: 130 },
  { month: "June", batata: 150, cenoura: 180 },
]

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

export function PolygonalChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Comparativo</CardTitle>
        <CardDescription>
          Produção nos ultímos 6 meses.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="batata"
              fill="var(--color-batata)"
              fillOpacity={0.6}
            />
            <Radar dataKey="cenoura" fill="var(--color-cenoura)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
