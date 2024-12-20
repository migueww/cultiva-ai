"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ButtonThemeToggleDropdown } from "@/components/theme-toggle";

export default function Configuracoes() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/logout", {
                method: "POST",
            });

            if (response.ok) {
                router.push("/login");
            } else {
                console.error("Erro ao realizar logout");
            }
        } catch (error) {
            console.error("Erro no servidor:", error);
        }
    };

    return (
        <div className="p-8 sm:p-20 min-h-screen">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold">Configurações</h1>
                <p className="text-lg text-gray-600">Gerencie suas preferências e configurações da conta.</p>
            </header>

            <main className="grid gap-8 max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle id="general">Configurações Gerais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" type="text" placeholder="Seu nome completo" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
                        </div>
                        <div>
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" placeholder="********" />
                        </div>
                        <Button className="w-full mt-4">Salvar Alterações</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle id="notifications">Notificações</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">Notificações por Email</Label>
                            <Switch id="email-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="push-notifications">Notificações Push</Label>
                            <Switch id="push-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="sms-notifications">Notificações por SMS</Label>
                            <Switch id="sms-notifications" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle id="appearance">Aparência</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="dark-mode">Modo Escuro</Label>
                            <ButtonThemeToggleDropdown />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Sair</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="destructive"
                            className="w-full"
                            onClick={handleLogout}
                        >
                            Encerrar Sessão
                        </Button>
                    </CardContent>
                </Card>
            </main>

            <footer className="mt-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Miguel Barcellos - Todos os direitos reservados.
            </footer>
        </div>
    );
}
