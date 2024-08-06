'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconDots,
  IconDotsVertical,
  IconEye,
  IconMail,
} from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';

import { Timeline } from '@/components';
import axiosInstance from '@/lib/axios';

const DraftDetailLayouts = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [currentState, setCurrentState] = React.useState(3);
  const [selectedState, setSelectedState] = React.useState(3);
  const maxState = 3;

  const fetchDraftDetail = async (draftId: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: 'รอการตรวจสอบรายชื่อ',
          description: 'You’ve created new branch',
          state: 'listening_to_comments',
          date: '3 months ago',
        });
      }, 1000);
    });
    const res = await axiosInstance.get(`/drafts/${draftId}`);
    return res.data;
  };

  const { data, isError } = useQuery({
    queryKey: ['drafts', id],
    queryFn: () => fetchDraftDetail(Number(id)),
  });

  const handleClickItem = (index: number) => {
    setSelectedState(index);
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
          ร่างพระราชบัญญัติยกเลิกคำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ 16/2560 เรื่อง
          การบริหารงานบุคคลของข้าราชการครูและบุคลากรทางการศึกษา ลงวันที่ 21 มีนาคม พุทธศักราช 2560
          พ.ศ. ....
        </Title>
        <Group justify="end">
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
              currentState={currentState}
              selectedState={selectedState}
              handleClickItem={handleClickItem}
              maxState={maxState}
            />
          </Grid.Col>
          <Grid.Col span={9}>{children}</Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
};

export default DraftDetailLayouts;
