import {
  IconHelp,
  IconPlus,
  IconPlayerPlay,
  IconSettings,
  IconHeartHandshake,
} from "@tabler/icons-react";

export const commands = [
  {
    icon: IconSettings,
    name: "/set-azkar-channel",
    ar: {
      desc: "تعيين قناة الأذكار في السيرفر",
    },
    en: {
      desc: "Set the remembrance channel for the server",
    },
  },
  {
    icon: IconHeartHandshake,
    name: "/support",
    ar: {
      desc: "رابط سيرفر الدعم الفني",
    },
    en: {
      desc: "Support server link",
    },
  },
  {
    icon: IconPlus,
    name: "/invite",
    ar: {
      desc: "إرسال رابط دعوة البوت",
    },
    en: {
      desc: "Send the bot invite link",
    },
  },
  {
    icon: IconPlayerPlay,
    name: "/ping",
    ar: {
      desc: "عرض زمن استجابة البوت",
    },
    en: {
      desc: "Show the bot latency",
    },
  },
  {
    icon: IconHelp,
    name: "/help",
    ar: {
      desc: "شرح الأوامر الخاصة بالبوت",
    },
    en: {
      desc: "Show the bot commands",
    },
  },
];