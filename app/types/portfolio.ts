export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "IDEA",
    desc: "Concept & Inspiration",
  },
  {
    step: "02",
    title: "PROMPT",
    desc: "AI Generation & Refinement",
  },
  {
    step: "03",
    title: "ANIMATION",
    desc: "Motion & Polish",
  },
  {
    step: "04",
    title: "FINAL RENDER",
    desc: "Color & Sound",
  },
];