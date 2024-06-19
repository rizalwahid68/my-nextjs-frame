// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'Simple Frame',
  description: 'A Simple Warpcast Frame Demo',
  openGraph: {
    title: 'Simple Frame',
    description: 'A Simple Warpcast Frame Demo',
    images: [`${siteUrl}/park-2.png`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${siteUrl}/park-2.png`,
    'fc:frame:post_url': `${siteUrl}/api/basic?id=1`,
    'fc:frame:button:1': 'Start',
    'fc:frame:button:1:url': `${siteUrl}/park-3.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
