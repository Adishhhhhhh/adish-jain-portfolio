// About tab content.
//
// Copy here is final and supplied verbatim. It lives as plain strings rather
// than inline JSX so no escaping or reflowing can touch it.

export const ABOUT_PARAGRAPHS: string[] = [
  "Making something that was not there a second ago is the most alive I ever feel. For me that goes into words and ideas.",
  "My head works by dragging one idea across fields that have nothing to do with each other until something falls out. Best trait and worst trait at once. Some days that costs four hours and returns nothing. Some days it returns the thing that moves the whole craft forward.",
  "I ended up in direct response because it is the only place I found where the feedback does not lie. You learn quickly how original the thinking really was, and how well you understood the person you were writing to. Being wrong in public, fast and cheap, is a good trade.",
  "What holds me here is persuasion. Almost everything competing for a person's attention right now was engineered by people with real budgets to hold that attention and hand nothing back, and it leaves them more distracted and less able to act on anything, including the things that would help them. The same machinery points the other way. A stranger reads forty seconds of something you wrote, recognizes something about themselves they had no words for, and does something about it, and their life is slightly better afterward.",
  "That is the part I want to get good at. Creative strategy is where psychology, storytelling, and systems thinking sit inside one job, and it is the closest channel I have found for it.",
];

export const CURRENT_WORK_LINE =
  "Currently working brief-side for a peptide tracking app: research consolidation, angle briefs, and script rewrites, on a per-project basis. Most of my hours go into the spec work and the tools below.";

export const BUILT_HEADING = "Built for myself";
export const BUILT_SUBHEAD = "Small things I made because I wanted them to exist.";

export type BuiltEntry = {
  title: string;
  label: string;
  href: string;
  description: string;
};

export const BUILT_ENTRIES: BuiltEntry[] = [
  {
    title: "The DR Swipe File",
    label: "drdtcbrandsswipe.vercel.app",
    href: "https://drdtcbrandsswipe.vercel.app/",
    description:
      "165 direct response DTC brands across 17 niches, each card opening that advertiser's own Meta Ad Library page instead of a keyword search you have to wade through. Tagged by whether a brand runs elite DR at scale or actually originates the concepts everyone else swipes. I was already in these libraries most days, so I built somewhere to keep them, and it outgrew the folder of screenshots it replaced.",
  },
  {
    title: "deep-research",
    label: "Claude Code skill",
    href: "https://github.com/Adishhhhhhh/deep-research",
    description:
      "A research agent for direct response creative strategy, built as a Claude Code skill. Auditable claims, research run in two directions, and falsification as its own pass, so a finding has to survive an attempt to break it before it reaches a brief.",
  },
  {
    title: "advertorial-swiper",
    label: "Python",
    href: "https://github.com/Adishhhhhhh/advertorial-swiper",
    description:
      "Finds live DTC advertorials and ranks them by how long each page has actually survived, checked against the Wayback Machine. A page still running eleven months later is telling you something a page from last week cannot. No API keys, no accounts, standard library only.",
  },
];

export const BUILT_FOOTER_PREFIX = "More at ";
export const BUILT_FOOTER_HANDLE = "github.com/Adishhhhhhh";
export const BUILT_FOOTER_HREF = "https://github.com/Adishhhhhhh";

// The former /contact page, moved here whole.
export const CONTACT_HEADING = "Contact";
export const CONTACT_LEAD =
  "DTC Creative Strategist and Direct Response Copywriter. Mumbai, India, open to remote, hybrid, or relocation.";

export type ContactRow = {
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_ROWS: ContactRow[] = [
  { label: "Email", value: "adish9504@gmail.com", href: "mailto:adish9504@gmail.com" },
  {
    label: "Upwork",
    value: "View Upwork profile",
    href: "https://www.upwork.com/freelancers/~016cb0f64c1b04bf9d?mp_source=share",
  },
  {
    label: "Availability",
    value: "Full-time roles, contract projects, or freelance engagements.",
  },
  { label: "Response time", value: "Email first. I respond within 24 hours." },
];
