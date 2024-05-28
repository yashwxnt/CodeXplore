import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/themeprovider";
import { SideBar } from "@/components/dashboard-components/sidebar";
import Header from "@/components/dashboard-components/header";
import PageWrapper from "@/components/dashboard-components/pagewrapper";
import { Karla } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
});

export const metadata: Metadata = {
  title: "Courses"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <div className="flex flex-col h-full w-full">             
              <PageWrapper> 
                <div className="w-full px-4 py-2">
                  <BreadcrumbNav courseId="course-id-placeholder" />
                </div>
                {children}
              </PageWrapper>
            </div>
          </>
        </ThemeProvider>
  );
}

function BreadcrumbNav({ courseId }: { courseId: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/courses">Courses</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/dashboard/courses/course-enroll/${courseId}`}>Course Enroll</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
