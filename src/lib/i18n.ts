import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About Us",
      services: "Services",
      blog: "Blog",
      contact: "Contact",

      // Common
      learnMore: "Learn More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      readMore: "Read More",

      // Home Page
      heroTitle: "Professional Solutions for Global Success",
      heroSubtitle:
        "We deliver innovative solutions that drive growth and transform businesses worldwide",
      aboutTitle: "About Our Company",
      aboutDescription:
        "With over a decade of experience, we provide world-class services to clients globally",
      featuresTitle: "Our Features",
      servicesTitle: "Our Services",
      testimonialsTitle: "What Our Clients Say",
      blogTitle: "Latest News & Insights",

      // Footer
      company: "Company",
      quickLinks: "Quick Links",
      support: "Support",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved",

      // About Page
      companyStory: "Our Story",
      mission: "Our Mission",
      vision: "Our Vision",
      team: "Our Team",
      culture: "Our Culture",
      achievements: "Our Achievements",
      careers: "Careers",

      // Services Page
      serviceCategories: "Service Categories",
      serviceDetails: "Service Details",
      benefits: "Benefits",
      pricing: "Pricing Plans",
      caseStudies: "Case Studies",
      faqs: "Frequently Asked Questions",

      // Blog Page
      blogList: "Blog Posts",
      categories: "Categories",
      featuredPosts: "Featured Posts",
      recentPosts: "Recent Posts",
      newsletter: "Newsletter Subscription",
      tags: "Tags",
      authorHighlight: "Author Spotlight",

      // Contact Page
      contactForm: "Contact Form",
      location: "Our Location",
      phoneEmail: "Phone & Email",
      socialMedia: "Social Media",
      officeHours: "Office Hours",
      supportInfo: "Support Information",
      feedback: "Feedback",
    },
  },
  bn: {
    translation: {
      // Navigation
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবাসমূহ",
      blog: "ব্লগ",
      contact: "যোগাযোগ",

      // Common
      learnMore: "আরও জানুন",
      getStarted: "শুরু করুন",
      contactUs: "যোগাযোগ করুন",
      readMore: "আরও পড়ুন",

      // Home Page
      heroTitle: "বিশ্বব্যাপী সাফল্যের জন্য পেশাদার সমাধান",
      heroSubtitle:
        "আমরা উদ্ভাবনী সমাধান প্রদান করি যা বৃদ্ধি চালিত করে এবং বিশ্বব্যাপী ব্যবসা রূপান্তরিত করে",
      aboutTitle: "আমাদের কোম্পানি সম্পর্কে",
      aboutDescription:
        "এক দশকেরও বেশি অভিজ্ঞতার সাথে, আমরা বিশ্বব্যাপী ক্লায়েন্টদের বিশ্বমানের সেবা প্রদান করি",
      featuresTitle: "আমাদের বৈশিষ্ট্য",
      servicesTitle: "আমাদের সেবাসমূহ",
      testimonialsTitle: "আমাদের ক্লায়েন্টরা কী বলেন",
      blogTitle: "সর্বশেষ সংবাদ ও অন্তর্দৃষ্টি",

      // Footer
      company: "কোম্পানি",
      quickLinks: "দ্রুত লিংক",
      support: "সহায়তা",
      followUs: "আমাদের অনুসরণ করুন",
      allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",

      // About Page
      companyStory: "আমাদের গল্প",
      mission: "আমাদের লক্ষ্য",
      vision: "আমাদের দৃষ্টিভঙ্গি",
      team: "আমাদের দল",
      culture: "আমাদের সংস্কৃতি",
      achievements: "আমাদের অর্জন",
      careers: "ক্যারিয়ার",

      // Services Page
      serviceCategories: "সেবার বিভাগ",
      serviceDetails: "সেবার বিবরণ",
      benefits: "সুবিধা",
      pricing: "মূল্য পরিকল্পনা",
      caseStudies: "কেস স্টাডি",
      faqs: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",

      // Blog Page
      blogList: "ব্লগ পোস্ট",
      categories: "বিভাগ",
      featuredPosts: "বিশেষ পোস্ট",
      recentPosts: "সাম্প্রতিক পোস্ট",
      newsletter: "নিউজলেটার সাবস্ক্রিপশন",
      tags: "ট্যাগ",
      authorHighlight: "লেখক স্পটলাইট",

      // Contact Page
      contactForm: "যোগাযোগ ফর্ম",
      location: "আমাদের অবস্থান",
      phoneEmail: "ফোন ও ইমেইল",
      socialMedia: "সোশ্যাল মিডিয়া",
      officeHours: "অফিস সময়",
      supportInfo: "সহায়তার তথ্য",
      feedback: "মতামত",
    },
  },
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      blog: "المدونة",
      contact: "اتصل بنا",

      // Common
      learnMore: "اعرف المزيد",
      getStarted: "ابدأ الآن",
      contactUs: "تواصل معنا",
      readMore: "اقرأ المزيد",

      // Home Page
      heroTitle: "حلول مهنية للنجاح العالمي",
      heroSubtitle:
        "نقدم حلولاً مبتكرة تدفع النمو وتحول الأعمال في جميع أنحاء العالم",
      aboutTitle: "عن شركتنا",
      aboutDescription:
        "مع أكثر من عقد من الخبرة، نقدم خدمات عالمية المستوى للعملاء في جميع أنحاء العالم",
      featuresTitle: "ميزاتنا",
      servicesTitle: "خدماتنا",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      blogTitle: "آخر الأخبار والرؤى",

      // Footer
      company: "الشركة",
      quickLinks: "روابط سريعة",
      support: "الدعم",
      followUs: "تابعنا",
      allRightsReserved: "جميع الحقوق محفوظة",

      // About Page
      companyStory: "قصتنا",
      mission: "مهمتنا",
      vision: "رؤيتنا",
      team: "فريقنا",
      culture: "ثقافتنا",
      achievements: "إنجازاتنا",
      careers: "الوظائف",

      // Services Page
      serviceCategories: "فئات الخدمات",
      serviceDetails: "تفاصيل الخدمة",
      benefits: "الفوائد",
      pricing: "خطط الأسعار",
      caseStudies: "دراسات الحالة",
      faqs: "الأسئلة الشائعة",

      // Blog Page
      blogList: "مقالات المدونة",
      categories: "الفئات",
      featuredPosts: "المقالات المميزة",
      recentPosts: "المقالات الحديثة",
      newsletter: "اشتراك النشرة الإخبارية",
      tags: "العلامات",
      authorHighlight: "تسليط الضوء على المؤلف",

      // Contact Page
      contactForm: "نموذج الاتصال",
      location: "موقعنا",
      phoneEmail: "الهاتف والبريد الإلكتروني",
      socialMedia: "وسائل التواصل الاجتماعي",
      officeHours: "ساعات العمل",
      supportInfo: "معلومات الدعم",
      feedback: "التعليقات",
    },
  },
  so: {
    translation: {
      // Navigation
      home: "Guriga",
      about: "Naga",
      services: "Adeegyada",
      blog: "Blog",
      contact: "Xiriir",

      // Common
      learnMore: "Wax Badan Baro",
      getStarted: "Bilow",
      contactUs: "Nala Xiriir",
      readMore: "Wax Badan Akhri",

      // Home Page
      heroTitle: "Xalal Xirfad leh oo Guul Caalami ah",
      heroSubtitle:
        "Waxaanu bixiynaa xalal hal-abuurnimo leh oo kordhinaya kobaca oo beddelaya ganacsiyada adduunka oo dhan",
      aboutTitle: "Shirkadayada",
      aboutDescription:
        "Khibrad toban sano ka badan, waxaanu siinaa adeegyo heer caalami ah macaamilada adduunka oo dhan",
      featuresTitle: "Sifooyinkayaga",
      servicesTitle: "Adeegyadayada",
      testimonialsTitle: "Waxa Macaamiladayadu Yiraahdaan",
      blogTitle: "Wararka iyo Aragtiyada Cusub",

      // Footer
      company: "Shirkadda",
      quickLinks: "Xiriirro Degdeg ah",
      support: "Taageero",
      followUs: "Na Raac",
      allRightsReserved: "Dhammaan xuquuqdu way kaydsan yihiin",

      // About Page
      companyStory: "Sheekadayada",
      mission: "Hadafkayaga",
      vision: "Aragtidayada",
      team: "Kooxdayada",
      culture: "Dhaqankayaga",
      achievements: "Guuleyaashayada",
      careers: "Shaqooyin",

      // Services Page
      serviceCategories: "Noocyada Adeegga",
      serviceDetails: "Faahfaahinta Adeegga",
      benefits: "Faa'iidooyinka",
      pricing: "Qorsheeyada Qiimaha",
      caseStudies: "Daraasadaha Kiiska",
      faqs: "Su'aalaha Inta Badan la Weydiiyo",

      // Blog Page
      blogList: "Boostada Blog",
      categories: "Qeybaha",
      featuredPosts: "Boostada Muuqata",
      recentPosts: "Boostada Cusub",
      newsletter: "Isdiiwaangelinta Warqadda",
      tags: "Sumadaha",
      authorHighlight: "Dhalaalinta Qoraaga",

      // Contact Page
      contactForm: "Foomka Xiriirka",
      location: "Goobteenna",
      phoneEmail: "Telefoon iyo Email",
      socialMedia: "Media Bulshada",
      officeHours: "Saacadaha Xafiiska",
      supportInfo: "Macluumaadka Taageerida",
      feedback: "Jawaab celinta",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
