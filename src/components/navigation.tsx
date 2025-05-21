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

interface NavigationProps {
  children: ReactNode;
  breadcrumb?: [];
}

// Двоеточием описываем тип данных(: Означает что пошёл TS)
export default function Navigation({ children }: NavigationProps) {
  const pathName = usePathname();
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

              {pathName === "/" ? (
                <BreadcrumbItem>
                <BreadcrumbPage>Main</BreadcrumbPage>
                </BreadcrumbItem>
                
              ) : pathName === "/dashboard" ? (
                <>
                {/* asChild кидает в слот, который передаёт нижнему элементу внешку */}
                  <BreadcrumbLink asChild>
                    <Link href="/">Main</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className=" md:block" />
                  <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
                </>
              ) : pathName === "/clients" ?(
               <>
                {/* asChild кидает в слот, который передаёт нижнему элементу внешку */}
                  <BreadcrumbLink asChild>
                    <Link href="/">Main</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className=" md:block" />
                  <BreadcrumbItem>
                <BreadcrumbPage>Clients</BreadcrumbPage>
                </BreadcrumbItem>
                </>
              ) : pathName === "/clients/new" ?(
                <>
                 {/* asChild кидает в слот, который передаёт нижнему элементу внешку */}
                   <BreadcrumbLink asChild>
                     <Link href="/">Main</Link>
                   </BreadcrumbLink>
                   <BreadcrumbSeparator className=" md:block" />
                   <BreadcrumbLink asChild>
                     <Link href="/clients">Clients</Link>
                   </BreadcrumbLink>
                   <BreadcrumbSeparator className=" md:block" />
                   <BreadcrumbItem>
                 <BreadcrumbPage>AddClient</BreadcrumbPage>
                 </BreadcrumbItem>
                 </>
               ): null
              
              }

                {/* <BreadcrumbLink asChild>
                <Link href="/dashboard"></Link>
                  </BreadcrumbLink> */}

              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
