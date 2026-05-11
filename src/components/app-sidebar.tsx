"use client"

import Link from "next/link"
import { BookOpen, FolderOpen, Home, LogOut, Settings } from "lucide-react"
import type { User } from "@supabase/supabase-js"
import { signOutAction } from "@/app/actions"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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

export function AppSidebar({ user }: { user: User | null }) {
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

      {user && (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <form action={signOutAction}>
                <SidebarMenuButton
                  type="submit"
                  tooltip="Sign Out"
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  <LogOut />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </form>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      )}

      <SidebarRail />
    </Sidebar>
  )
}
