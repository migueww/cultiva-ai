import { PolygonalChart } from "@/components/use-chart";
import { Card } from "@/components/ui/card";

export default function Policultura() {
  const rotationData = [
    { label: "Batata → Cenoura → Milho", produtividade: 950 },
    { label: "Soja → Trigo → Batata", produtividade: 1100 },
    { label: "Cenoura → Soja → Milho", produtividade: 1050 },
    { label: "Milho → Feijão → Batata", produtividade: 1150 },
    { label: "Trigo → Cenoura → Soja", produtividade: 1000 },
  ];

  const seasonData = [
    { label: "Primavera", produtividade: 1250 },
    { label: "Verão", produtividade: 1400 },
    { label: "Outono", produtividade: 1100 },
    { label: "Inverno", produtividade: 800 },
  ];

  const soilData = [
    { label: "Solo Arenoso", produtividade: 850 },
    { label: "Solo Argiloso", produtividade: 1100 },
    { label: "Solo Orgânico", produtividade: 1300 },
  ];

  const diversityData = [
    { label: "Batata", produtividade: 550 },
    { label: "Cenoura", produtividade: 600 },
    { label: "Soja", produtividade: 500 },
    { label: "Milho", produtividade: 750 },
    { label: "Trigo", produtividade: 650 },
    { label: "Feijão", produtividade: 700 },
  ];

  return (
    <div className="grid grid-cols-1 gap-16 p-8 sm:p-20 min-h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Painel de Policultura</h1>
        <p className="text-lg text-gray-600">
          Explore a produtividade e eficiência em sistemas de rotação e diversificação de culturas.
        </p>
      </header>

      <main className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="w-full">
          <PolygonalChart
            title="Eficiência de Rotação de Culturas"
            description="Análise das produtividades em diferentes sistemas de rotação"
            data={rotationData}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Estação"
            description="Impacto das estações do ano na diversificação de culturas"
            data={seasonData}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Produtividade por Tipo de Solo"
            description="Desempenho em diferentes tipos de solo com policultura"
            data={soilData}
          />
        </Card>

        <Card className="w-full">
          <PolygonalChart
            title="Diversidade de Culturas"
            description="Comparação de produtividade entre diferentes tipos de culturas"
            data={diversityData}
          />
        </Card>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Miguel Barcellos - Todos os direitos reservados.
      </footer>
    </div>
  );
}
