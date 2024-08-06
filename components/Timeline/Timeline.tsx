'use client';

import React from 'react';
import { Box, Container, Text, Timeline, TimelineItemProps } from '@mantine/core';
import { IconCheck, IconDots } from '@tabler/icons-react';

interface TimelineSectionProps {
  currentState?: number;
  selectedState?: number;
  maxState?: number;
  handleClickItem?: (index: number) => void;
}

interface ISteps extends Omit<TimelineItemProps, 'id'> {
  id: number;
  title: string;
  description?: string;
  date: string;
  state: string;
}

const disables = ['reviewing_list', 'awaiting_prime_minister_review'];

// MASTER_DATA
const steps = [
  {
    id: 1,
    title: 'รอการตรวจสอบรายชื่อ',
    // description: 'You’ve created new branch',
    state: 'awaiting_prime_minister_review',
    date: '3 months ago',
  },
  {
    id: 2,
    title: 'กำลังรับฟังความเห็น',
    // description: 'You’ve pushed 23 commits to',
    state: 'listening_to_comments',
    date: '1 month ago',
  },
  {
    id: 3,
    title: 'รอนายกรัฐมนตรีตรวจสอบ',
    // description: 'You’ve submitted a pull request',
    state: 'awaiting_prime_minister_review',
    date: '2 days ago',
  },
  { id: 4, title: 'รอบรรจุวาระ 1', state: 'awaiting_agenda_1' },
  { id: 5, title: 'บรรจุวาระที่ 1', state: 'agenda_1_scheduled' },
  { id: 6, title: 'รอบรรจุวาระที่ 2', state: 'awaiting_agenda_2' },
  { id: 7, title: 'กรรมาธิการ (วาระ2)', state: 'committee_agenda_2' },
  { id: 8, title: 'รอประชุมวาระที่ 2', state: 'awaiting_meeting_agenda_2' },
  { id: 9, title: 'ประชุมวาระ 2', state: 'meeting_agenda_2' },
  { id: 10, title: 'รอประชุมวาระที่ 3', state: 'awaiting_meeting_agenda_3' },
  { id: 11, title: 'ประชุมวาระ 3', state: 'meeting_agenda_3' },
  { id: 12, title: 'วาระ 3 เห็นชอบ', state: 'agenda_3_approved' },
] as ISteps[];

const TimelineSection = ({
  currentState = -1,
  selectedState,
  maxState = 0,
  handleClickItem,
}: TimelineSectionProps) => {
  const shouldDisable = (state: string) => disables.includes(state);
  return (
    <Container size="lg" py="lg">
      <Timeline active={currentState} bulletSize={24} lineWidth={4} color="main-red">
        {steps.map((step, index) => (
          <Timeline.Item
            key={step.title}
            bullet={
              index === currentState ? (
                <IconDots />
              ) : (
                index <= currentState && <IconCheck size={12} />
              )
            }
            title={step.title}
            lineVariant={index > maxState - 1 ? 'dashed' : step.lineVariant || 'solid'}
            onClick={() =>
              shouldDisable(step.state) ? null : index <= maxState && handleClickItem?.(index)
            }
            styles={{
              itemTitle: {
                opacity: selectedState === index ? 1 : 0.5,
                cursor: shouldDisable(step.state) ? 'not-allowed' : 'pointer',
              },
              itemBullet: {
                // borderColor: selectedState === index ? 'main-red' : 'transparent',
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
