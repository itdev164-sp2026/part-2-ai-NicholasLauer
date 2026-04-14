"use client"

import Link from "next/link"
import { BookOpen, FolderOpen, Home, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Overview", icon: Home, href: "/", tooltip: "Overview" },
  { title: "Projects", icon: FolderOpen, href: "/projects", tooltip: "Projects" },
  { title: "Settings", icon: Settings, href: "/settings", tooltip: "Settings" },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="/" />} size="lg">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5 leading-none">
                <span className="truncate font-semibold">ITDEV-164</span>
                <span className="truncate text-xs text-muted-foreground">Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ title, icon: Icon, href, tooltip }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton render={<Link href={href} />} tooltip={tooltip}>
                    <Icon />
                    <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
