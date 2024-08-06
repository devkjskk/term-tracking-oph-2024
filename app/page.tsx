'use client';

import { Divider } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import { DraftsTable } from '@/components/DraftsTable';
import axiosInstance from '@/lib/axios';

import { Welcome } from '../components/Welcome/Welcome';
import { ILaw, IResponse } from '@/types';

export default function HomePage() {
  const fetchDrafts = async (): Promise<IResponse<ILaw>> => {
    const res = await axiosInstance.get('/raw', {
      params: {},
    });
    return res.data;
  };

  const { data } = useQuery<IResponse<ILaw>>({
    queryKey: ['drafts'],
    queryFn: () => fetchDrafts(),
  });

  console.log('🚀 ~ data:', data);
  return (
    <>
      <Welcome />
      <Divider my={36} />
      <DraftsTable />
    </>
  );
}
