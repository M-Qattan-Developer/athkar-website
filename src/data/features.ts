import {
  IconShieldCheck,
  IconWorld,
  IconClock,
  IconLock,
} from "@tabler/icons-react";

export const features = [
  {
    icon: IconShieldCheck,

    ar: {
      title: "مراجعة قبل النشر",
      desc: "كل ذكر يمر على إدارة البوت قبل وصوله لجميع السيرفرات.",
    },

    en: {
      title: "Reviewed Before Publishing",
      desc: "Every remembrance is reviewed before being shared with all servers.",
    },
  },

  {
    icon: IconWorld,

    ar: {
      title: "انتشار واسع",
      desc: "بعد الموافقة يصل الذكر إلى جميع السيرفرات المشاركة.",
    },

    en: {
      title: "Wide Reach",
      desc: "Once approved, the remembrance reaches every participating server.",
    },
  },

  {
    icon: IconClock,

    ar: {
      title: "نشر تلقائي",
      desc: "لا تحتاج لإعادة إرسال الذكر أكثر من مرة.",
    },

    en: {
      title: "Automatic Publishing",
      desc: "You only submit the remembrance once.",
    },
  },

  {
    icon: IconLock,

    ar: {
      title: "خصوصية كاملة",
      desc: "لا يتم عرض اسم المرسل أثناء النشر.",
    },

    en: {
      title: "Complete Privacy",
      desc: "The sender's identity is never shown.",
    },
  },
];