import { PolygonalChart } from '@/components/use-chart';
import { Card } from '@/components/ui/card';

export default function Home() {
  const chartConfig1 = [
    { label: "Talhão A", batata: 500, cenoura: 300 },
    { label: "Talhão B", batata: 700, cenoura: 450 },
    { label: "Talhão C", batata: 600, cenoura: 350 },
  ];

  const chartConfig2 = [
    { label: "Primavera", batata: 800, cenoura: 500 },
    { label: "Verão", batata: 950, cenoura: 600 },
    { label: "Outono", batata: 700, cenoura: 400 },
    { label: "Inverno", batata: 650, cenoura: 350 },
  ];

  const chartConfig3 = [
    { label: "Solo Arenoso", batata: 400, cenoura: 250 },
    { label: "Solo Argiloso", batata: 600, cenoura: 400 },
    { label: "Solo Orgânico", batata: 750, cenoura: 500 },
  ];

  const chartConfig4 = [
    { label: "Rotação 1 (Batata-Cenoura)", batata: 800, cenoura: 450 },
    { label: "Rotação 2 (Batata-Milho)", batata: 900, cenoura: 0 },
    { label: "Rotação 3 (Cenoura-Soja)", batata: 0, cenoura: 600 },
  ];

  return (
    <div className="grid grid-cols-1 gap-16 p-8 sm:p-20 min-h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Painel de Análise Agrícola</h1>
        <p className="text-lg text-gray-600">
          Visualize o desempenho e a produtividade das suas plantações em diferentes contextos.
        </p>
      </header>

      <main className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Talhão"
            description="Comparação da produção de Batata e Cenoura em diferentes talhões"
            data={chartConfig1}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Estação"
            description="Impacto das estações do ano na produção agrícola"
            data={chartConfig2}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Tipo de Solo"
            description="Comparativo de produção de Batata e Cenoura em solos diferentes"
            data={chartConfig3}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Eficiência de Rotações de Culturas"
            description="Resultados de diferentes sistemas de rotação de culturas"
            data={chartConfig4}
          />
        </Card>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Miguel Barcellos - Todos os direitos reservados.
      </footer>
    </div>
  );
}
