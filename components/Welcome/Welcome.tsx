'use client';

import { Title, Text, Grid } from '@mantine/core';
import {
  IconGavel,
  IconNotes,
  IconChecklist,
  IconCalendarStats,
  IconClockPause,
  IconEar,
  IconBan,
  IconTournament,
} from '@tabler/icons-react';
import classes from './Welcome.module.css';
// import { useSetState } from '@mantine/hooks';
import { Card } from './Card/Card';

interface WelcomeProps {
  handleCLick: (state: string) => void;
}

export function Welcome({ handleCLick }: WelcomeProps) {
  return (
    <div className={classes.bgWelCome}>
      <Title className={classes.title} ta="center" mt={50}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          constitution
        </Text>
      </Title>

      <Grid grow gutter="md" m={{ base: 15, md: 25 }}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            topic="ตรวจสอบรายชื่อ"
            title=""
            number={128}
            bgColor="#772728"
            colorBorder="#772728"
            colorFont="white"
            customMinheight="150px"
            icon={
              <IconNotes
                color="white"
                size={42}
                style={{
                  marginLeft: '10px',
                }}
              />
            }
            onClick={() => handleCLick('reviewing_list')}
          />
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <Card
              topic="กำลังรับฟังความเห็น"
              number={1}
              bgColor="#CD5C5C"
              colorBorder="#CD5C5C"
              colorFont="white"
              icon={
                <IconEar
                  color="white"
                  size={42}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </div>
          <Grid grow gutter="md" mt={15}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                topic="นายกตรวจสอบ ร่างการเงิน"
                number={0}
                bgColor="#FFA500"
                colorBorder="#FFA500"
                colorFont="white"
                icon={
                  <IconChecklist
                    color="white"
                    size={42}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
                }
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Grid grow>
            <Grid.Col span={{ base: 12 }}>
              <Card
                topic="รอบรรจุระเบียบวาระการประชุม"
                number={1}
                bgColor="#a1c4fd"
                colorBorder="#c2e9fb"
                colorFont="white"
                cusTomFontSize="18px"
                customMinheight="140px"
                icon={
                  <IconClockPause
                    color="white"
                    size={42}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                topic="ประชุมวาระ 1"
                number={1}
                bgColor="#ffc3a0"
                colorBorder="#ffafbd"
                colorFont="white"
                cusTomFontSize="14px"
                icon={
                  <IconCalendarStats
                    color="white"
                    size={42}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                topic="ประชุมวาระ 2"
                number={1}
                bgColor="#ffc3a0"
                colorBorder="#ffafbd"
                colorFont="white"
                cusTomFontSize="14px"
                icon={
                  <IconCalendarStats
                    color="white"
                    size={42}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Card
                topic="ประชุมวาระ 3"
                number={1}
                bgColor="#1589FF"
                colorBorder="#1589FF"
                colorFont="white"
                icon={
                  <IconCalendarStats
                    color="white"
                    size={42}
                    style={{
                      marginLeft: '10px',
                    }}
                  />
                }
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            topic="ผ่านเป็นกฎหมาย"
            number={1}
            bgColor="#22BB33"
            colorBorder="#22BB33"
            colorFont="white"
            icon={
              <IconGavel
                color="white"
                size={42}
                style={{
                  marginLeft: '10px',
                }}
              />
            }
          />
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <Card
              topic="ปัดตก"
              number={1}
              bgColor="darkred"
              colorBorder="darkred"
              colorFont="white"
              icon={
                <IconBan
                  color="white"
                  size={42}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </div>

          <div
            style={{
              marginTop: '10px',
            }}
          >
            <Card
              topic="ส่งวุฒิสภาพิจารณาต่อ"
              number={1}
              bgColor="#7E354D"
              colorBorder="#7E354D"
              colorFont="white"
              icon={
                <IconTournament
                  color="white"
                  size={42}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
