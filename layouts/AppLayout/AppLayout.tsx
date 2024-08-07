'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box } from '@mantine/core';
import { Header } from '@/components';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Box
        mah="100vh"
        style={{
          marginTop: '80px',
        }}
      >
        {children}
      </Box>
    </QueryClientProvider>
  );
};

export default AppLayout;
