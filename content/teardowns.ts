// Annotated Teardown markers for the NeuroGum "Caffeine and Meth" VSL showpiece.
// Per PLAN.md §7: interactive markers placed directly on the creative, mono analyst voice.

export type Hotspot = {
  id: string;
  /** Position on the video frame, in % (0–100) */
  x: number;
  y: number;
  /** Timestamp in seconds where this insight is most relevant */
  time: number;
  label: string; // short tag, e.g. "Hook"
  title: string;
  body: string;
};

export const NEUROGUM_TEARDOWN: { conceptId: string; hotspots: Hotspot[] } = {
  conceptId: "ng-coffee-meth",
  hotspots: [
    {
      id: "h1-hook",
      x: 50,
      y: 12,
      time: 0,
      label: "Hook",
      title: "Pattern-interrupt hook, second one.",
      body: "The meth comparison stops the scroll and reframes the category before the brain has time to register 'another supplement ad.' Two and a half seconds is the entire window; this line spends one of them.",
    },
    {
      id: "h2-face",
      x: 52,
      y: 38,
      time: 5,
      label: "Face in frame",
      title: "Faces lift thumb-stop rate roughly 30%.",
      body: "Eye contact in the opening frame buys the next two seconds. Product-only openers test ~30% lower on thumb-stop in the comparable Andromeda category data.",
    },
    {
      id: "h3-cut",
      x: 18,
      y: 60,
      time: 12,
      label: "First cut",
      title: "Cut before 1.5 seconds. The active-attention window closes there.",
      body: "Amplified Intelligence's measurement is 2.5 seconds for passive attention, 1.5 for active. Past 1.5s on a single static frame and the brain disengages. The cut here resets the clock.",
    },
    {
      id: "h4-mechanism",
      x: 82,
      y: 55,
      time: 28,
      label: "Mechanism",
      title: "Buccal delivery reveal. The reason to believe.",
      body: "Caffeine through the cheek lands in 5 to 10 minutes. Through the gut, 30 to 45. The audience has lived the gap and has never been given the number. The reveal is the entire conversion event.",
    },
    {
      id: "h5-close",
      x: 50,
      y: 88,
      time: 52,
      label: "Close",
      title: "Specific verb. 'Steer.'",
      body: "Generic close words (energise, optimise, unlock) lose to specific verbs that paint a behaviour. 'Steer' implies driver-not-passenger, which is the entire identity reframe.",
    },
  ],
};
