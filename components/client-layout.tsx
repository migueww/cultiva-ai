"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noSidebarPaths = ["/login", "/login/signup"];
  const showSidebar = !noSidebarPaths.includes(pathname);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen">
        {showSidebar ? (
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col">
              <SidebarTrigger />
              {children}
            </div>
          </SidebarProvider>
        ) : (
          <div className="flex flex-1 flex-col">{children}</div>
        )}
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
