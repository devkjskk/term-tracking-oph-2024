'use client';

import { ActionIcon, Avatar, Badge, Container, Table, Text } from '@mantine/core';
import { IconChevronRight, IconFileDescription } from '@tabler/icons-react';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import 'dayjs/locale/th';
import { useRouter } from 'next/navigation';
import { ILaw } from '@/types';

dayjs.locale('th');
dayjs.extend(buddhistEra);

const stateColors: Record<string, string> = {
  reviewing_list: 'main-red',
  listening_to_comments: 'cyan',
  awaiting_prime_minister_review: 'pink',
  awaiting_agenda_1: 'blue',
  agenda_1_scheduled: 'green',
  awaiting_agenda_2: 'blue',
  committee_agenda_2: 'orange',
  awaiting_meeting_agenda_2: 'blue',
  meeting_agenda_2: 'green',
  awaiting_meeting_agenda_3: 'blue',
  meeting_agenda_3: 'green',
  agenda_3_approved: 'green',
};

const stateLabels: Record<string, string> = {
  reviewing_list: 'ตรวจสอบรายชื่อ',
  listening_to_comments: 'กำลังรับฟังความเห็น',
  awaiting_prime_minister_review: 'รอนายกฯตรวจสอบ',
  awaiting_agenda_1: 'รอบรรจุวาระ 1',
  agenda_1_scheduled: 'บรรจุวาระที่ 1',
  awaiting_agenda_2: 'รอบรรจุวาระที่ 2',
  committee_agenda_2: 'กรรมาธิการ (วาระ2)',
  awaiting_meeting_agenda_2: 'รอประชุมวาระที่ 2',
  meeting_agenda_2: 'ประชุมวาระ 2',
  awaiting_meeting_agenda_3: 'รอประชุมวาระที่ 3',
  meeting_agenda_3: 'ประชุมวาระ 3',
  agenda_3_approved: 'วาระ 3 เห็นชอบ',
};

interface DraftsTableProps {
  data: ILaw[];
}

const DraftsTable = ({ data }: DraftsTableProps) => {
  const router = useRouter();

  const handleNavigation = (id: number, state: string) => {
    router.push(`/drafts/${id}/${state}`);
  };

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>
        <Avatar size={40} radius={40} src={null} color="main-red">
          <IconFileDescription />
        </Avatar>
      </Table.Td>
      <Table.Td>
        <Text truncate={false}>{row.name}</Text>
      </Table.Td>
      <Table.Td>
        <Badge size="lg" color={stateColors[row.state.toLowerCase()]} variant="light">
          {stateLabels[row.state.toLowerCase()]}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text truncate>{dayjs(row.createdAt).format('DD MMM BBBB')}</Text>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="subtle"
          onClick={() => handleNavigation(Number(row.id), row.state)}
          color="main-red"
        >
          <IconChevronRight />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg">
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>ร่างกฏหมาย</Table.Th>
              <Table.Th>สถานะ</Table.Th>
              <Table.Th>วันที่สร้าง</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
};

export default DraftsTable;
