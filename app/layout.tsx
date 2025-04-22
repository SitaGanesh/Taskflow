import './globals.css';
import { ReactNode } from 'react';
import ReduxProvider from '@/components/ReduxProvider';
import Head from 'next/head';
import '@fontsource/inter';


export const metadata = {
  title: 'TaskFlow - Smart Task Manager',
  description: 'A smart way to manage your daily tasks',
  keywords: 'task manager, productivity, Next.js',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', // Fallback Font Awesome CDN
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-[Inter]">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>
      <body className="bg-white text-gray-900 antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}