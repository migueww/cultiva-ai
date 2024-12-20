import { PolygonalChart } from '@/components/use-chart';
import { Card } from '@/components/ui/card';

export default function Monocultura() {
  const chartData1 = [
    { label: "Talhão A", monocultura: 1000 },
    { label: "Talhão B", monocultura: 1200 },
    { label: "Talhão C", monocultura: 900 },
  ];

  const chartData2 = [
    { label: "Primavera", monocultura: 1400 },
    { label: "Verão", monocultura: 1600 },
    { label: "Outono", monocultura: 1100 },
    { label: "Inverno", monocultura: 800 },
  ];

  const chartData3 = [
    { label: "Solo Arenoso", monocultura: 900 },
    { label: "Solo Argiloso", monocultura: 1100 },
    { label: "Solo Orgânico", monocultura: 1300 },
  ];

  const chartData4 = [
    { label: "Ano 1", monocultura: 2000 },
    { label: "Ano 2", monocultura: 2200 },
    { label: "Ano 3", monocultura: 2100 },
  ];

  return (
    <div className="grid grid-cols-1 gap-16 p-8 sm:p-20 min-h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Painel de Monocultura</h1>
        <p className="text-lg text-gray-600">
          Visualize o desempenho da produção em monocultura em diferentes cenários.
        </p>
      </header>

      <main className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Talhão"
            description="Desempenho da monocultura em diferentes talhões"
            data={chartData1}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Estação"
            description="Impacto das estações do ano na monocultura"
            data={chartData2}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Tipo de Solo"
            description="Comparativo de produção em diferentes tipos de solo"
            data={chartData3}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade Anual"
            description="Resultados da monocultura ao longo dos anos"
            data={chartData4}
          />
        </Card>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Miguel Barcellos - Todos os direitos reservados.
      </footer>
    </div>
  );
}
