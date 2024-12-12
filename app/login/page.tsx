"use client";

import * as React from "react";
import { ThemeToggleDropdown } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.status == 401) {
        toast({
          title: "Acesso não autorizado.",
          description: result.error,
          variant: "destructive",
        });
        return
      }

      toast({
        title: "Login bem-sucedido!",
        description: result.message,
        variant: "default",
      });

      router.push("/");
    } catch (error) {
      console.error(error);
      
      toast({
        title: "Erro no servidor",
        description: "Não foi possível realizar o login. Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <ThemeToggleDropdown />
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Insira suas credenciais para entrar no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Esqueci minha senha
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleClick} type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login com o Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{" "}
              <Link href="../login/signup" className="underline">
                Crie uma!
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
