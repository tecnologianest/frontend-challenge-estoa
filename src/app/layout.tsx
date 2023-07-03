'use client';
import React from 'react';

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
        <CacheProvider>
          <ChakraProvider>
            <Header />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
