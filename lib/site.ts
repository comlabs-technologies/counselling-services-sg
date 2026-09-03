export const WHATSAPP_URL = "https://wa.me/6589968808";
export const WHATSAPP_NUMBER = "6589968808";
export const WHATSAPP_DISPLAY = "+65 8996 8808";
export const EMAIL = "hello@theemberpractice.com.sg";
export const PHONE_DISPLAY = "+65 6871 4390";
export const PHONE_TEL = "tel:+6568714390";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theemberpracticesg/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theemberpractice/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheEmberPractice",
  },
] as const;

export const navLinks = [
  { href: "#support", label: "How we can help" },
  { href: "#sheetal", label: "Meet Sheetal" },
  { href: "#locations", label: "Locations" },
  { href: "#faq", label: "FAQs" },
] as const;

export const trustRail = [
  "500+ counselling sessions",
  "Medical and counselling experience",
  "Online and in-person",
  "Private and confidential",
] as const;

export const pathways = [
  {
    id: "anxious",
    title: "I feel anxious, overwhelmed or emotionally exhausted",
    suggest: "Individual Counselling / Stress & Burnout",
    href: "#individual",
    description:
      "A private space to slow down, understand what you are carrying, and find a steadier way through stress, anxiety, burnout or emotional overwhelm.",
  },
  {
    id: "conversations",
    title: "We keep having the same difficult conversations",
    suggest: "Couples Counselling",
    href: "#couples",
    description:
      "A structured, respectful space to notice recurring patterns, rebuild trust and reconnect without blame.",
  },
  {
    id: "family",
    title: "My family is navigating conflict or change",
    suggest: "Family Support",
    href: "#family",
    description:
      "Support for families who need calmer communication while moving through conflict, parenting stress or a major transition.",
  },
  {
    id: "medicine",
    title: "Work or medicine has become too heavy",
    suggest: "Support for Medical Professionals",
    href: "#medical",
    description:
      "Confidential support from someone who understands clinical culture, high-stakes responsibility and the cost of caring for others.",
  },
  {
    id: "unsure",
    title: "I’m not sure—I just need somewhere to begin",
    suggest: "Private Enquiry",
    href: "#enquiry",
    description:
      "You do not need a diagnosis or the right words. A short message is enough to start a private conversation.",
  },
] as const;

export const primaryServices = [
  {
    id: "individual",
    title: "Individual Counselling",
    body: "A private space to explore stress, anxiety, emotional overwhelm, burnout, self-worth, grief and life transitions.",
  },
  {
    id: "couples",
    title: "Couples Counselling",
    body: "A structured space to slow difficult conversations, understand recurring patterns, rebuild trust and reconnect without blame.",
  },
  {
    id: "family",
    title: "Family Support",
    body: "Support for families navigating conflict, parenting stress, major transitions and healthier communication.",
  },
] as const;

export const secondaryServices = [
  {
    title: "Stress & Burnout",
    body: "Support when pressure, fatigue and emotional strain have become too heavy.",
  },
  {
    title: "Online Sessions",
    body: "Flexible, private counselling support from a space that works for you.",
  },
] as const;

export const corporateWellness = {
  title: "Corporate Wellness",
  body: "Workplace wellbeing support through counselling pathways, workshops, wellbeing talks and manager support.",
} as const;

export const whoSheetalSupports = [
  "Adults navigating anxiety, stress and life transitions",
  "Young people managing school and social pressures",
  "Families experiencing relationship challenges",
  "Older adults coping with loneliness and change",
] as const;

export const credentials = [
  {
    label: "Master’s in Counselling, Monash University",
    kind: "qualification" as const,
  },
  {
    label: "Graduate Certificate in Counselling, Monash University",
    kind: "qualification" as const,
  },
  {
    label: "MRCPCH (UK)",
    kind: "qualification" as const,
  },
  {
    label: "FCPS Paediatrics",
    kind: "qualification" as const,
  },
  {
    label: "MBBS, University of Mumbai",
    kind: "qualification" as const,
  },
  {
    label: "Additional training in mindfulness, mental health response and relationship enrichment",
    kind: "training" as const,
  },
  {
    label: "Practice guided by the SAC Code of Ethics.",
    kind: "ethics" as const,
  },
] as const;

export const medicalConcerns = [
  "Stress, burnout and emotional fatigue",
  "High-pressure decisions and responsibility",
  "Work-life boundaries and relationships",
  "Career transitions and professional identity",
  "Perfectionism, self-doubt and expectations",
  "Difficult workplace experiences",
] as const;

export const testimonials = [
  {
    quote:
      "I felt heard and understood from the very first session. The space felt calm, safe and genuinely supportive.",
    featured: true,
  },
  {
    quote:
      "The sessions helped me make sense of things I had been struggling with for a long time.",
    featured: false,
  },
  {
    quote:
      "A thoughtful and grounded approach that helped me move forward with more clarity.",
    featured: false,
  },
] as const;

export const firstSessionSteps = [
  {
    id: "01",
    title: "Begin with a short enquiry",
    body: "Share only what feels comfortable and ask any questions you may have.",
  },
  {
    id: "02",
    title: "Have a first conversation",
    body: "Talk about what brought you here and what kind of support may feel helpful.",
  },
  {
    id: "03",
    title: "Choose a comfortable pace",
    body: "You and Sheetal can discuss an approach that suits your situation.",
  },
  {
    id: "04",
    title: "Decide what feels right",
    body: "There is no pressure to continue until the space feels suitable for you.",
  },
] as const;

export const locations = [
  {
    name: "International Plaza",
    lines: ["10 Anson Road, #28-14", "International Plaza", "Singapore 079903"],
    mrt: ["EW15 Tanjong Pagar", "Exit C", "TE19 Shenton Way nearby"],
    description:
      "Ideal for clients travelling from Tanjong Pagar, Shenton Way and the wider CBD.",
    image: "/images/ember/international-plaza-actual.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=10%20Anson%20Road%20%2328-14%20International%20Plaza%20Singapore%20079903",
  },
  {
    name: "High Street Centre",
    lines: ["1 North Bridge Road, #01-48", "High Street Centre", "Singapore 179094"],
    mrt: ["NE5 Clarke Quay", "EW13 / NS25 City Hall"],
    description:
      "Convenient for clients around City Hall, Clarke Quay, Boat Quay and the civic district.",
    image: "/images/ember/high-street-centre-actual.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1%20North%20Bridge%20Road%20%2301-48%20High%20Street%20Centre%20Singapore%20179094",
  },
] as const;

export const faqs = [
  {
    question: "Is counselling confidential?",
    answer:
      "Counselling is intended to be a private and respectful space. There are limited circumstances involving safety or legal obligations, and these are discussed clearly and sensitively.",
  },
  {
    question: "What happens in the first session?",
    answer:
      "The first session is a calm conversation about what brings you to counselling, what has been difficult and what you hope may change. You do not need to tell everything at once.",
  },
  {
    question: "How do I know if counselling is right for me?",
    answer:
      "A first conversation can help you decide whether counselling and this particular space feel useful for your situation.",
  },
  {
    question: "What if I find it difficult to talk?",
    answer:
      "That is completely understandable. Sessions can move slowly and you do not need to force yourself to share everything immediately.",
  },
  {
    question: "Can sessions be online?",
    answer:
      "Yes. Sessions may be arranged online or in person depending on preference, availability and suitability.",
  },
  {
    question: "How long is a session?",
    answer:
      "Counselling sessions are commonly around 50 to 60 minutes. The exact arrangement can be confirmed before booking.",
  },
] as const;

export const enquiryHelpOptions = [
  "Individual support",
  "Couples counselling",
  "Family support",
  "Stress or burnout",
  "Medical professional support",
  "Corporate wellness",
  "I’m not sure yet",
] as const;

export const enquiryReassurance = [
  "Private and respectful",
  "No commitment",
  "Online and in-person options",
  "No clinical details required",
] as const;

export type ContactMethod = "whatsapp" | "email" | "phone";
