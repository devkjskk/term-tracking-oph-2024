'use client';

import { ActionIcon, Avatar, Badge, Container, Table, Text } from '@mantine/core';
import { IconChevronRight, IconFileDescription } from '@tabler/icons-react';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import 'dayjs/locale/th';
import { useRouter } from 'next/navigation';

dayjs.locale('th');
dayjs.extend(buddhistEra);

const mock = [
  {
    id: 1,
    name: 'ร่างพระราชบัญญัติยกเลิกคำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ 16/2560 เรื่อง การบริหารงานบุคคลของข้าราชการครูและบุคลากรทางการศึกษา ลงวันที่ 21 มีนาคม พุทธศักราช 2560 พ.ศ. ....',
    state: 'listening_to_comments',
    created_at: '2024-06-07 00:00:00',
    disableStates: ['awaiting_agenda_1', 'agenda_1_scheduled'],
  },
  {
    id: 2,
    name: 'ร่างพระราชบัญญัติยกเลิกคำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ 16/2560 เรื่อง การบริหารงานบุคคลของข้าราชการครูและบุคลากรทางการศึกษา ลงวันที่ 21 มีนาคม พุทธศักราช 2560 พ.ศ. ....',
    state: 'awaiting_agenda_1',
    created_at: '2024-06-07 00:00:00',
  },
  {
    id: 3,
    name: 'ร่างพระราชบัญญัติยกเลิกคำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ 16/2560 เรื่อง การบริหารงานบุคคลของข้าราชการครูและบุคลากรทางการศึกษา ลงวันที่ 21 มีนาคม พุทธศักราช 2560 พ.ศ. ....',
    state: 'awaiting_prime_minister_review',
    created_at: '2024-06-07 00:00:00',
  },
];

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

const DraftsTable = () => {
  const router = useRouter();

  const handleNavigation = (id: number, state: string) => {
    router.push(`/drafts/${id}/${state}`);
  };

  const rows = mock.map((row) => (
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
        <Text truncate>{dayjs(row.created_at).format('DD MMM BBBB')}</Text>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="subtle"
          onClick={() => handleNavigation(row.id, row.state)}
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
