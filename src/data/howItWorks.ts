import {
  IconUpload,
  IconShieldCheck,
  IconWorldShare,
} from "@tabler/icons-react";

export const steps = [
  {
    icon: IconUpload,

    ar: {
      title: "يرسل العضو ذكرًا",
      desc: "نص، صورة أو مقطع داخل روم الأذكار.",
    },

    en: {
      title: "Submit a Remembrance",
      desc: "Send a text, image, or video in the remembrance channel.",
    },
  },

  {
    icon: IconShieldCheck,

    ar: {
      title: "تتم المراجعة",
      desc: "إدارة البوت تعتمد الذكر قبل نشره.",
    },

    en: {
      title: "Review Process",
      desc: "The bot team reviews the remembrance before publishing.",
    },
  },

  {
    icon: IconWorldShare,

    ar: {
      title: "ينتشر للجميع",
      desc: "يصل لجميع السيرفرات المشاركة دون إظهار اسم المرسل.",
    },

    en: {
      title: "Shared with Everyone",
      desc: "It reaches all participating servers without revealing the sender.",
    },
  },
];