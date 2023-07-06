'use client';
import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/Header';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <CacheProvider>
            <ChakraProvider>
              <Header />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
