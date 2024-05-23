import { Karla } from 'next/font/google'
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/themeprovider';
import Header from '@/components/dashboard-components/header';
import PageWrapper from '@/components/dashboard-components/pagewrapper';
import { SideBar } from '@/components/dashboard-components/sidebar';


const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <Header />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}