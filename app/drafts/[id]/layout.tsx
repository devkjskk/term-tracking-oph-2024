'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  ScrollArea,
  Stack,
  Title,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconDots,
  IconEye,
  IconFileDescription,
  IconMail,
} from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';

import { Timeline } from '@/components';
import axiosInstance from '@/lib/axios';
import { STATE_INDEX } from '@/constants';

const DraftDetailLayouts = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [selectedState, setSelectedState] = React.useState('');

  const fetchLawDetail = async () => {
    const res = await axiosInstance.get(`/raw/${id}`);
    return res.data.payload;
  };

  const { data: lawDetail, isError } = useQuery({
    queryKey: ['drafts', id],
    queryFn: () => fetchLawDetail(),
  });

  useEffect(() => {
    if (!isError && !!lawDetail) setSelectedState(lawDetail?.state);
  }, [isError, lawDetail]);

  const handleClickItem = (newState: string) => {
    setSelectedState(newState);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Container size="lg" py={12}>
      <Stack gap="xs">
        <Group>
          <Button
            p={0}
            size="xs"
            variant="white"
            color="default"
            leftSection={<IconChevronLeft />}
            onClick={handleBack}
          >
            ย้อนกลับ
          </Button>
        </Group>
        <Title order={2} mb={16}>
          {lawDetail?.name}
        </Title>
        <Group justify="space-between">
          <Group gap="xs">
            <Button
              size="compact-xs"
              color="grey"
              leftSection={<IconFileDescription size={16} />}
              onClick={() => {
                window.open(
                  'https://www.parliament.go.th/section77/manage/files/file_20230911125054_1_292.pdf',
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              ร่างพระราชบัญญัติ
            </Button>
            <Button
              size="compact-xs"
              color="grey"
              leftSection={<IconFileDescription size={16} />}
              onClick={() => {
                window.open(
                  'https://www.parliament.go.th/section77/manage/files/file_20231121145230_2_292.pdf',
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              เอกสารประกอบ
            </Button>
            <Button
              size="compact-xs"
              color="grey"
              leftSection={<IconFileDescription size={16} />}
              onClick={() => {
                window.open(
                  'https://www.parliament.go.th/section77/manage/files/file_20231121145230_2_292.pdf',
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              รายงานสรุปความคิดเห็น
            </Button>
          </Group>
          <Group gap="xs">
            <Button
              size="compact-xs"
              leftSection={<IconEye size={24} />}
              variant="transparent"
              color="default"
            >
              1
            </Button>
            <Button size="compact-xs" color="main-red" leftSection={<IconMail size={16} />}>
              ติดตามสถานะ
            </Button>
            <ActionIcon size="sm" variant="outline" color="gray">
              <IconDots size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
      <Divider mt={8} mb={7} color="lightgray" />
      <Box>
        <Grid px="lg">
          <Grid.Col span={3} pt={32} style={{ borderRight: '1px solid lightgray' }}>
            <Timeline
              currentState={STATE_INDEX[lawDetail?.state || 0]}
              selectedState={STATE_INDEX[selectedState || 0]}
              handleClickItem={handleClickItem}
              maxState={STATE_INDEX[lawDetail?.state || 0]}
              stateLogs={lawDetail?.stateLogs}
            />
          </Grid.Col>
          <Grid.Col span={9}>
            <ScrollArea>{children}</ScrollArea>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
};

export default DraftDetailLayouts;
