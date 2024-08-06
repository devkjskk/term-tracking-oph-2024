export const STATE_COLORS: Record<string, string> = {
  reviewing_list: 'main-red',
  listening_to_comments: 'cyan',
  comments_completed: 'light-cyan', // Added new state
  prime_minister_review: 'pink', // Adjusted state name
  awaiting_agenda_inclusion: 'blue', // Adjusted state name
  meeting_agenda_1: 'green', // Added new state
  meeting_agenda_2: 'green',
  meeting_agenda_3: 'green',
  sent_to_senate_for_review: 'orange', // Added new state
  rejected: 'main-red',
};

export const STATE_LABEL: Record<string, string> = {
  reviewing_list: 'ตรวจสอบรายชื่อ',
  listening_to_comments: 'กำลังรับฟังความเห็น',
  comments_completed: 'รับฟังความเห็นเสร็จสิ้น', // Added new state
  prime_minister_review: 'นายกตรวจสอบ ร่างการเงิน', // Adjusted state name
  awaiting_agenda_inclusion: 'บรรจุระเบียบวาระการประชุม', // Adjusted state name
  meeting_agenda_1: 'ประชุมวาระ 1', // Added new state
  meeting_agenda_2: 'ประชุมวาระ 2',
  meeting_agenda_3: 'ประชุมวาระ 3',
  sent_to_senate_for_review: 'ส่งวุฒิสภาพิจารณาต่อ', // Added new state
  rejected: 'ปัดตก',
};

export const STATE_INDEX: Record<string, number> = {
  reviewing_list: 0,
  listening_to_comments: 1,
  comments_completed: 2,
  prime_minister_review: 3,
  awaiting_agenda_inclusion: 4,
  meeting_agenda_1: 5,
  meeting_agenda_2: 6,
  meeting_agenda_3: 7,
  sent_to_senate_for_review: 8,
  rejected: 9,
};
