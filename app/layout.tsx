import { Toaster } from "@/components/ui/sonner"
import { GlobalState } from "@/components/utility/global-state"
import { Providers } from "@/components/utility/providers"
import { Database } from "@/supabase/types"
import { createServerClient } from "@supabase/ssr"
import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { ReactNode } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const APP_NAME = "soar_cloud_UI1"
const APP_DEFAULT_TITLE = "soar_cloud_UI"
const APP_TITLE_TEMPLATE = "%s - soar_cloud_UI"
const APP_DESCRIPTION = "soar_cloud_UI PWA!"

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: APP_DEFAULT_TITLE
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: "#000000"
}

export default async function RootLayout({
  children
}: RootLayoutProps) {
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )



  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="light">
          <GlobalState>
            <div className="bg-background text-foreground flex h-dvh flex-col items-center overflow-x-auto">
              {children}
            </div>
            <Toaster richColors position="top-center" duration={3000} />
          </GlobalState>
        </Providers>
      </body>
    </html>
  )
}
