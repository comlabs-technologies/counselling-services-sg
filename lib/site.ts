export const WHATSAPP_URL = "https://wa.me/6589968808";
export const EMAIL = "hello@theemberpractice.com.sg";
export const PHONE_DISPLAY = "+65 6871 4390";
export const PHONE_TEL = "tel:+6568714390";

export const editorialOffers = [
  {
    id: "01",
    title: "Individual counselling",
    lead: "A private space to understand what you are carrying.",
    body: "Stress, anxiety, burnout, self-worth, grief and life transitions.",
  },
  {
    id: "02",
    title: "Couples counselling",
    lead: "Communication, repair and understanding.",
    body: "Slow difficult conversations, recognise patterns and reconnect without blame.",
  },
  {
    id: "03",
    title: "Family support",
    lead: "Navigate change, conflict and connection.",
    body: "Help each person feel heard while building clearer, healthier communication.",
  },
  {
    id: "04",
    title: "Stress & burnout",
    lead: "When pressure has become too heavy.",
    body: "Restore boundaries, emotional balance and a more sustainable way of living.",
  },
  {
    id: "05",
    title: "Online sessions",
    lead: "The same care, from your own space.",
    body: "Secure, flexible support for privacy, travel and demanding schedules.",
  },
  {
    id: "06",
    title: "Corporate wellness",
    lead: "Healthier teams. Sustainable performance.",
    body: "Counselling pathways, workshops, wellbeing talks and manager support.",
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Initial contact",
    body: "Send a short enquiry through the website or WhatsApp.",
  },
  {
    id: "02",
    title: "First conversation",
    body: "Understand your needs, goals and preferred session format.",
  },
  {
    id: "03",
    title: "Counselling plan",
    body: "Agree on an approach that fits your situation.",
  },
  {
    id: "04",
    title: "Ongoing support",
    body: "Work together at a safe, manageable pace.",
  },
] as const;

export const faqs = [
  {
    question: "Is counselling confidential?",
    answer:
      "Yes. Counselling is a private and respectful space, with limited safety or legal exceptions discussed clearly.",
  },
  {
    question: "How do I know if counselling is right for me?",
    answer:
      "A first session can help you explore that. You do not need to arrive with everything figured out.",
  },
  {
    question: "What happens in the first session?",
    answer:
      "We begin gently with what brings you here, what support you are looking for and what pace feels comfortable.",
  },
  {
    question: "Can sessions be online?",
    answer:
      "Yes. Sessions can be arranged in person or securely online, depending on preference and suitability.",
  },
] as const;

export const credentials = [
  "Master’s in Counselling, Monash University",
  "Graduate Certificate in Counselling, Monash University",
  "MRCPCH (UK) · FCPS Paediatrics",
  "MBBS, University of Mumbai",
  "SAC Code of Ethics",
] as const;

export const clinicalServices = [
  [
    "Individual counselling",
    "Anxiety, stress, grief, burnout and life transitions.",
  ],
  [
    "Couples counselling",
    "Communicate with care, rebuild trust and move forward together.",
  ],
  [
    "Family support",
    "A calmer space for conflict, change and parenting pressures.",
  ],
  [
    "For medical professionals",
    "Support from someone who understands clinical work.",
  ],
] as const;

export const guidedChoices = [
  ["myself", "For myself", "Stress, anxiety or feeling stuck"],
  ["relationship", "For my relationship", "Communication, conflict or trust"],
  ["family", "For my family", "Parenting, change or connection"],
  ["unsure", "I’m not sure", "Help me understand my options"],
] as const;

export const guidedRelief = [
  "Your mind rarely switches off",
  "You and your partner keep reaching the same impasse",
  "Work is taking more than you can give",
  "A transition has left you feeling unsteady",
  "You want change, but don’t know where to begin",
] as const;

export const guidedLocations = [
  ["01", "International Plaza", "10 Anson Road · Tanjong Pagar MRT, Exit C"],
  [
    "02",
    "High Street Centre",
    "1 North Bridge Road · Near City Hall & Clarke Quay",
  ],
  ["03", "Online", "Private video sessions, wherever you feel comfortable."],
] as const;

export const enquiryOptions = [
  "Individual support",
  "Couples counselling",
  "Family support",
  "I’m not sure yet",
] as const;
