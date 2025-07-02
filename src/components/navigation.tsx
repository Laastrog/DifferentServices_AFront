"use client"

import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationProps {
  children: ReactNode;
  breadcrumb?: {
    type: string
    text: string
    path?: string
  }[];
}

// Двоеточием описываем тип данных(: Означает что пошёл TS)
export default function Navigation({ children, breadcrumb }: NavigationProps) {
 
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
              {!breadcrumb ? null : breadcrumb.map((val:any, i) => (
                val.type == "text" ? ( 
                <React.Fragment key={i}>
                  {i == 0 ? null : <BreadcrumbSeparator className= "md:block" />}
                  <BreadcrumbItem>
                    <BreadcrumbPage>{val.text}</BreadcrumbPage>
                  </BreadcrumbItem>
                </React.Fragment>
                ) : ( 
                  <React.Fragment key={i}>
                    {i == 0 ? null : <BreadcrumbSeparator className=" md:block" />}
                    <BreadcrumbLink asChild>
                      <Link href={val.path}>{val.text}</Link>
                    </BreadcrumbLink>
                  </React.Fragment>
                  )
              ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
