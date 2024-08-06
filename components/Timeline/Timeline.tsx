'use client';

import React from 'react';
import { Box, Container, Text, Timeline, TimelineItemProps } from '@mantine/core';
import { IconCheck, IconDots } from '@tabler/icons-react';
import { STATE_INDEX } from '@/constants';

interface IStateLog {
  id: string;
  state: string;
  endDate: string | null;
  actionDate: string | null;
  detail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  rawId: string;
}

interface TimelineSectionProps {
  currentState?: number;
  selectedState?: number;
  maxState?: number;
  stateLogs: IStateLog[];
  handleClickItem?: (newState: string) => void;
}

interface ISteps extends Omit<TimelineItemProps, 'id'> {
  id: number;
  title: string;
  description?: string;
  date: string;
  state: string;
}

// MASTER_DATA
const steps = [
  {
    id: 1,
    title: 'รอการตรวจสอบรายชื่อ',
    // description: 'You’ve created new branch',
    state: 'reviewing_list',
    date: '11 months ago',
  },
  {
    id: 2,
    title: 'กำลังรับฟังความเห็น',
    // description: 'You’ve pushed 23 commits to',
    state: 'listening_to_comments',
    date: '8 month ago',
  },
  {
    id: 8,
    title: 'รับฟังความเห็นเสร็จสิ้น',
    // description: 'You’ve pushed 23 commits to',
    state: 'comments_completed',
    date: '7 month ago',
  },
  {
    id: 3,
    title: 'นายกตรวจสอบ ร่างการเงิน',
    // description: 'You’ve submitted a pull request',
    state: 'prime_minister_review',
    date: '5 month ago',
  },
  {
    id: 4,
    title: 'บรรจุระเบียบวาระการประชุม',
    state: 'awaiting_agenda_inclusion',
    date: '4 month ago',
  },
  { id: 9, title: 'ประชุมวาระ 1', state: 'meeting_agenda_1', date: '1 month ago' },
  { id: 9, title: 'ประชุมวาระ 2', state: 'meeting_agenda_2', date: '1 month ago' },
  // { id: 10, title: 'รอประชุมวาระที่ 3', state: 'awaiting_meeting_agenda_3' },
  { id: 11, title: 'ประชุมวาระ 3', state: 'meeting_agenda_3', date: '1 month ago' },
  // { id: 12, title: 'วาระ 3 เห็นชอบ', state: 'agenda_3_approved', date: '1 month ago'  },
  {
    id: 13,
    title: 'ส่งวุฒิสภาพิจารณาต่อ',
    state: 'sent_to_senate_for_review',
    date: '1 month ago',
  },
  { id: 14, title: 'ปัดตก', state: 'rejected', date: '2 days ago' },
] as ISteps[];

const TimelineSection = ({
  currentState = -1,
  selectedState,
  maxState = -1,
  stateLogs = [],
  handleClickItem,
}: TimelineSectionProps) => {
  const shouldDisable = (state: string, index?: number) =>
    !stateLogs?.find((step) => step.state === state) && currentState !== index;
  return (
    <Container size="lg" py="lg">
      <Timeline active={currentState} bulletSize={24} lineWidth={4} color="main-red">
        {steps.map((step, index) => (
          <Timeline.Item
            key={step.title}
            bullet={<IconCheck size={12} />}
            title={step.title}
            lineVariant={index > maxState - 1 ? 'dashed' : step.lineVariant || 'solid'}
            onClick={() =>
              shouldDisable(step.state, index)
                ? null
                : index <= maxState && handleClickItem?.(step.state)
            }
            styles={{
              itemTitle: {
                opacity: selectedState === index ? 1 : 0.5,
                cursor: shouldDisable(step.state, index) ? 'not-allowed' : 'pointer',
                textDecoration: selectedState === index ? 'underline' : 'none',
              },
            }}
          >
            {step.description && (
              <Text c="dimmed" size="sm">
                {step.description}
              </Text>
            )}
            <Text size="xs" mt={4}>
              {step.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
};

export default TimelineSection;
