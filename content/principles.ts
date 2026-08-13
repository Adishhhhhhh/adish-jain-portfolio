// The closing section of the Creative Approach page. Seven positions that sit
// under every method above them.
//
// Kept deliberately short. Nobody scrolls to the bottom of a long page to read
// seven essays, so each one is a claim and a handful of short lines. Anything
// that needed a paragraph to justify itself was cut rather than trimmed.
//
// Rules: no em dashes, no contrast negation.

export type Principle = {
  id: string;
  n: string;
  title: string;
  /** the position in one plain line */
  claim: string;
  markdown: string;
};

export const PRINCIPLES_INTRO = "Seven things I keep coming back to.";

export const PRINCIPLES: Principle[] = [
  {
    id: "research",
    n: "01",
    title: "Research is the whole game.",
    claim: "You can only write as well as you understand.",
    markdown: `Most bad ads are bad research wearing a costume. The ad failed weeks before anyone wrote it, at the moment someone decided what it should say.

Awareness and emotional triggers are two inputs. The rest matter just as much: what the account already proved, what the category has exhausted, what the product can actually defend, the words they use when nobody is selling, the identity underneath the stated desire, and the space nobody is standing in.

Depth of input is the one advantage a bigger production budget cannot buy.`,
  },
  {
    id: "ego",
    n: "02",
    title: "Ego is the most expensive line item.",
    claim: "I would rather be corrected than be right.",
    markdown: `Every strong opinion in this job has a losing test behind it. Mine included.

Ego rarely shows up as arrogance. It shows up as not wanting to kill your own idea.

That reluctance has a price, and the client pays it.

The market settles the argument for free, and faster than I can.`,
  },
  {
    id: "learning",
    n: "03",
    title: "The account is always learning. So am I.",
    claim: "Neither of us ever finishes learning.",
    markdown: `Meta labels a phase learning, then drops the label. The system never stops updating. It stops narrating.

New creative, a budget change, a competitor entering the auction, and it is correcting again.

I run the same loop. Every dead test revises something that felt settled.

I like working on a system held to the same rule I am.`,
  },
  {
    id: "hook",
    n: "04",
    title: "The hook is the gate everything waits behind.",
    claim: "If nobody stops, nothing else you wrote matters.",
    markdown: `At a 20% hook rate, four of every five dollars bought an impression that never became attention.

The mechanism, the proof, the offer you structured for a week. None of it was graded.

So the first three seconds take most of the writing effort, and it is the hardest part to hand to a model.

The hook also decides who stops, which decides who the ad finds next. It filters as much as it attracts.`,
  },
  {
    id: "feed",
    n: "05",
    title: "The competition is the entire feed.",
    claim: "Your ad has to be worth more than a photo of someone's dog.",
    markdown: `Rival ads are a thin slice of what you are up against. The real field is a friend's holiday, an argument about geopolitics, and a stranger's genuinely surprising life update.

That content was made by people whose only job was attention, with nothing to sell at the end. And it arrives with permission. Nobody feels interrupted by a friend.

Your ad has to earn the attention and then convert it, against material optimised for the first job alone.

Which is why native formats work. An ad shaped like the feed borrows the feed's permission.`,
  },
  {
    id: "personalization",
    n: "06",
    title: "Write to one person, then do it again.",
    claim: "The ad picks who sees it. So write to one person.",
    markdown: `This used to be a copywriting preference. Andromeda made it a delivery fact.

The system reads the creative and decides who to show it to. The angle and the language now do the targeting that interest settings used to.

An ad written to nobody in particular gives it nothing to match on, so it gets matched loosely and reads to everyone as addressed to someone else.

The working unit is smaller than a persona. It is who someone is right now, in this situation, with this trigger.

A hundred generic assets are one asset repeated. Thirty specific ones are thirty doors.`,
  },
  {
    id: "direct-response",
    n: "07",
    title: "Persuasion is a kitchen, and I like cooking in it.",
    claim: "The best ad I write makes someone's life a little better.",
    markdown: `A stranger scrolls past. Forty seconds later they believe something new and act on it. Nobody argued with them.

That still amazes me.

It also points wherever you aim it. Same craft, same buttons, and the only variable is who is holding it.

So I write what I would tell my own family to buy. You cannot fake a mechanism for a product that has none.

The ingredients are public: story, mechanism, agitation, education, proof, the after, the ask. The craft is knowing which four this person needs, in what order, and how long to hold each.

Agitation is where that gets sharpest. Done badly it invents a wound to sell the bandage. Done right it names something they have carried for years without words, and being handed the words is a relief.

That is the version of this job I want.`,
  },
];
