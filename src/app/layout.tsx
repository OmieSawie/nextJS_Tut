import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
export const metadata = {
  title: 'Discussion Forum',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode,
  authModal: React.ReactNode,
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className='min-h-screen pt-12 background-slate-50 antialiased'>

        {/*@ts-expect-error server component*/}
        <Navbar/>

        {/*The auth modal intercept*/}
        {authModal}

        <div className='container  mx-auto h-full pt-12'>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
