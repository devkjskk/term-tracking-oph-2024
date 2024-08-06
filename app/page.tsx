'use client';

import { useState } from 'react';
import { Avatar, Center, Divider, Group, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { IconFileDescription } from '@tabler/icons-react';

import { DraftsTable } from '@/components/DraftsTable';
import axiosInstance from '@/lib/axios';

import { Welcome } from '../components/Welcome/Welcome';
import { ILaw, IResponse } from '@/types';
import { STATE_LABEL } from '@/constants';

export default function HomePage() {
  const [currentState, setCurrentState] = useState('reviewing_list');

  const fetchDrafts = async (params?: any): Promise<IResponse<ILaw>> => {
    const res = await axiosInstance.get('/raw', {
      params: {
        // searchBy: 'state',
        // search: params.state,
      },
    });
    return res.data;
  };

  const { data } = useQuery<IResponse<ILaw>>({
    queryKey: ['drafts', currentState],
    queryFn: () =>
      fetchDrafts({
        state: currentState,
      }),
  });

  const handleSelectState = (state: string) => {
    setCurrentState(state);
  };

  return (
    <>
      <Welcome handleCLick={handleSelectState} />
      <Divider my={36} />
      <Center mb={18} pb={16}>
        <Group align="center">
          <Avatar size={40} radius={40} src={null} color="main-red" variant="filled">
            <IconFileDescription />
          </Avatar>
          <Title>{STATE_LABEL[currentState]}</Title>
        </Group>
      </Center>
      <DraftsTable data={data?.payload || []} />
    </>
  );
}
