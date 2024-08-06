'use client';

import { Divider } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import { DraftsTable } from '@/components/DraftsTable';
import axiosInstance from '@/lib/axios';

import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  const fetchDrafts = async () => {
    const res = await axiosInstance.get('/raw', {
      params: {},
    });
  };

  const { data } = useQuery({
    queryKey: ['drafts'],
    queryFn: () => fetchDrafts(),
  });

  return (
    <>
      <Welcome />
      <Divider my={36} />
      <DraftsTable />
    </>
  );
}
