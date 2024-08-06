'use client';

import { Title, Text, Grid } from '@mantine/core';
import {
  IconGavel,
  IconNotes,
  IconChecklist,
  IconCalendarStats,
  IconClockPause,
  IconEar,
} from '@tabler/icons-react';
import classes from './Welcome.module.css';
// import { useSetState } from '@mantine/hooks';
import { Card } from './Card/Card';

export function Welcome() {
  return (
    <div className={classes.bgWelCome}>
      <Title className={classes.title} ta="center" mt={50}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          constitution
        </Text>
      </Title>

      {/* <Title className={classes.section} ta="left" mt={100} m={{ base: 15, md: 25 }}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#ff758c', to: '#ff7eb3' }}
        >
          การรับฟังความคิดเห็นต่อร่าง พ.ร.บ
        </Text>
      </Title> */}

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

          {/* <Card
            topic="ตรวจสอบรายชื่อ"
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
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <Card
              topic="กำลังฟังความเห็น"
              number={1}
              bgColor="#1589FF"
              colorBorder="#1589FF"
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
                <IconGavel
                  color="white"
                  size={42}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </div> */}
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Grid grow>
            <Grid.Col span={{ base: 12 }}>
              <Card
                topic="รอบรรจุระเบียบวาระการประชุม"
                number={1}
                bgColor="#1589FF"
                colorBorder="#1589FF"
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
                bgColor="#22BB33"
                colorBorder="#22BB33"
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
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                topic="ประชุมวาระ 2"
                number={1}
                bgColor="#22BB33"
                colorBorder="#22BB33"
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
            <Grid.Col span={{ base: 12 }}>
              <Card
                topic="ประชุมวาระ 3"
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
                <IconGavel
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
                <IconGavel
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

      {/* <Container mt={{ base: 25, lg: 50 }}>
        <Grid grow gutter="md">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="ตรวจสอบรายชื่อ"
              title="เสนอในสภาผู้แทนราษฎร"
              number={128}
              bgColor="darkred"
              colorBorder="darkred"
              colorFont="white"
              icon={
                <IconChecklist
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              title="กำลังฟังความเห็น"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="รับฟังความเห็นเสร็จสิ้น"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="นายกตรวจสอบ"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="รอบรรจุระเบียบวาระการประชุม"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
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
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
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
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="ประชุมวาระ 3"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="ส่งวุฒิสภาพิจารณาต่อ"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="ปัดตก"
              number={1}
              bgColor="#22BB33"
              colorBorder="#22BB33"
              colorFont="white"
              icon={
                <IconGavel
                  color="white"
                  size={64}
                  style={{
                    marginLeft: '10px',
                  }}
                />
              }
            />
          </Grid.Col>
        </Grid>
      </Container> */}
    </div>
  );
}

/* <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card
              topic="โดยสมาชิกสภา ผู้แทนราษฏร"
              number={0}
              bgColor="#F8EDE3"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="โดยประชาชนผู้มีสิทธิเลือกตั้ง"
              number={12}
              bgColor="#FEFAE0"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="กำลังเปิดรับฟังความคิดเห็น"
              number={60}
              bgColor="#FFC6C6"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="ปิดรับฟังความคิดเห็น"
              number={40}
              bgColor="#E7F0DC"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="เผยแพร่รายงานผลการแสดงความคิดเห็น"
              number={50}
              bgColor="#BBE9FF"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="รอคำรับรองของนายกรัฐมนตรี"
              number={23}
              bgColor="#FBF9F1"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="บรรจุเข้าระเบียบวาระ"
              number={12}
              bgColor="#fff9f8ff"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card
              topic="พิจารณาแล้ว"
              number={50}
              bgColor="#fff9f8ff"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="ผ่านเป็นกฎหมาย"
              number={2}
              bgColor="#f5fcfbff"
              colorBorder="#2cbeb7ff"
              colorFont="#2cbeb7ff"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              topic="นายกรัฐมนตรีไม่รับรอง"
              number={30}
              bgColor="#F6F5F2"
              colorBorder="#fe8a84ff"
              colorFont="#fe8a84ff"
            />
          </Grid.Col> */
