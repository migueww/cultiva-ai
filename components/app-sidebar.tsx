"use client"

import * as React from "react"
import {
  UtilityPole,
  BookOpen,
  Bot,
  Flower2,
  // Frame,
  Sprout,
  // Map,
  // PieChart,
  Settings2,
  Leaf,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { ModelSwitcher } from "@/components/model-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Miguel Barcellos",
    email: "miguew.png@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  models: [
    {
      name: "Setor A",
      logo: Sprout,
      categoria: "Monocultura",
    },
    {
      name: "Setor B",
      logo: UtilityPole,
      categoria: "Monocultura",
    },
    {
      name: "Setor C",
      logo: Flower2,
      categoria: "Policultura",
    }
  ],
  navMain: [
    {
      title: "Histórico",
      url: "#",
      icon: Leaf,
      isActive: true,
      items: [
        {
          title: "Relatórios",
          url: "#",
        },
        {
          title: "Relatórios salvos",
          url: "#",
        },
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
    {
      title: "Modelos",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Gênesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introdução",
          url: "#",
        },
        {
          title: "Início",
          url: "#",
        },
        {
          title: "Tutoriais",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Culturas",
          url: "#",
        },
        {
          title: "Preços",
          url: "#",
        },
        {
          title: "Limites",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Explorar",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Informações",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Localização",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ModelSwitcher models={data.models} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
