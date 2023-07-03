'use client';
import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
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
