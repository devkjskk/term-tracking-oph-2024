'use client';

import { ActionIcon, Avatar, Badge, Container, Table, Text } from '@mantine/core';
import { IconChevronRight, IconFileDescription } from '@tabler/icons-react';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import 'dayjs/locale/th';
import { useRouter } from 'next/navigation';
import { ILaw } from '@/types';
import { STATE_COLORS, STATE_LABEL } from '@/constants';

dayjs.locale('th');
dayjs.extend(buddhistEra);

interface DraftsTableProps {
  data: ILaw[];
}

const DraftsTable = ({ data }: DraftsTableProps) => {
  const router = useRouter();

  const handleNavigation = (id: string, state: string) => {
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
        <Badge size="lg" color={STATE_COLORS[row.state.toLowerCase()]} variant="light">
          {STATE_LABEL[row.state.toLowerCase()]}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text truncate>{dayjs(row.createdAt).format('DD MMM BBBB')}</Text>
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
