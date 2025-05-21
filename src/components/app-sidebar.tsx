"use client"

import * as React from "react"
import {
  AudioWaveform,
  Book,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Gamepad2,
  Map,
  PieChart,
  Settings,
  Settings2,
  Sparkles,
  SquareTerminal,
  User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "laastrog",
    email: "laastrog@yandex.ru",
    avatar: "",
  },
  teams: [
    {
      name: "Mentor",
      logo: Book,
      plan: "Наставик",
      
    },
    {
      name: "Administrator",
      logo: Frame,
      plan: "Универсальный специалист",
    },
    {
      name: "Director",
      logo: Command,
      plan: "Руководитель ораганизации",
    },
  ],
  navMain: [
    {
      title: "Сервисы",
      url: "#",
      icon: Sparkles,
      isActive: true,
      items: [
        {
          title: "Доска",
          url: "/dashboard",
        },
        {
          title: "Классный журнал",
          url: "#",
        },
        {
          title: "Расчёт заработной платы",
          url: "#",
        },
      ],
    },
    {
      title: "Клиентура",
      url: "#",
      icon: User,
      items: [
        {
          // title: "Транзакции",
          title: "Новый клиент",
          url: "/clients/new",
        },
        {
          title: "База данных",
          url: "/clients",
        },
        {
          title: "Абонементы",
          url: "#",
        },
        {
          title: "Примечание",
          url: "#",
        },
      ],
    },
    {
      title: "Документация",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Обратная связь",
          url: "#",
        },
        {
          title: "Журнал изменения",
          url: "#",
        },
      ],
    },
    {
      title: "Настройки",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Общее",
          url: "#",
        },
        {
          title: "Команда",
          url: "#",
        },

      ],
    },
    
  ],
  // dev:[
  //   {
  //     title: "Документация",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Обратная связь",
  //         url: "#",
  //       },
  //       {
  //         title: "Журнал изменения",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Настройки",
  //     url: "#",
  //     icon: Settings,
  //     items: [
  //       {
  //         title: "Общее",
  //         url: "#",
  //       },
  //       {
  //         title: "Команда",
  //         url: "#",
  //       },

  //     ],
  //   },
  // ]
  
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
    
  // ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
      {/* <NavMain items={data.dev} /> */}
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
