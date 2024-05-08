import {cn} from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from "next/font/google"
import Navbar from '@/components/ui/Navbar'
import { Toaster } from '@/components/ui/toaster'
export const metadata = {
  title: 'Discussion Forum',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({subsets:['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiast light',inter.className)}>
      <body className='min-h-screen pt-12 background-slate-50 antialiast'>
	  <Navbar/>
	  <div className='container max-w-7xl  mx-auto h-full pt-12'>
	  {children}
	  </div>
    <Toaster/>
	  </body>
    </html>
  )
}
