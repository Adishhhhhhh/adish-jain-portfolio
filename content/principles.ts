// The closing section. Six positions that sit under every method in the
// Creative Approach and the Strategic Approach.
//
// This replaces the old nine-belief Creative Strategy page. Six of those
// beliefs (awareness, sophistication, mechanisms, ICP, offer, format diversity)
// were process rather than philosophy, so they now live inside the pipeline
// where they are actually executed. What remains here is only the things that
// hold regardless of brand, category, or platform release.
//
// Rules: no em dashes, no contrast negation.

export type Principle = {
  id: string;
  n: string;
  title: string;
  /** the position, compressed to one line */
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
    markdown: `Good input plus strategic thinking produces good output. Everything else I believe is a consequence of taking that sentence literally.

Most creative failure is research failure wearing a creative costume. The ad that does not work usually failed weeks earlier, at the moment someone decided what it should say.

The inputs that actually decide a campaign, and none of them are creative acts:

- **What the account already proved.** Every past winner classified by avatar, angle, format, and the spend each one held. Do that manually and the empty cells write the brief for you
- **What the category has exhausted.** Which claims three competitors are all running right now, which the buyer has gone blind to, and which are still unclaimed
- **What the product can defend.** The problem mechanism and the solution mechanism, understood technically before either gets translated into customer language
- **What the customer says unprompted.** Verbatims, the metaphors they reach for, and the autopsy on every solution that already failed them
- **What they are actually buying.** The identity underneath the stated desire, because copy that stops at the functional benefit reads like a label
- **Where nobody is standing.** The whitespace across creative, mechanism, messaging, format, and offer

Awareness level and emotional drivers are two entries on that list. Treating them as the whole list is how you get research that is technically correct and strategically useless.

The pattern underneath all of it is the same: every one of those is an input, and creative is downstream of all of them. Which is why the process front-loads research to a degree that looks excessive. It is the only advantage in this discipline that a competitor cannot buy with a bigger production budget.

**The consequence I hold myself to.** If an asset cannot be traced back to something in the brief, it does not get made. Not because the rule is elegant, but because untraceable assets are where taste quietly replaces evidence.`,
  },
  {
    id: "ego",
    n: "02",
    title: "Ego is the most expensive line item.",
    claim: "I would rather be corrected than be right.",
    markdown: `Every strong opinion in this discipline has a losing test somewhere behind it. Mine included.

Feedback arrives from two directions, and both are cheaper than being right. A person who has done this longer can hand me a correction in thirty seconds that a test would take three weeks and real money to deliver. The account itself is the second source, and it has no interest in my reasoning at all.

What ego actually looks like in this job is rarely arrogance. It shows up as reluctance to kill your own idea, and that reluctance has a price:

- The angle that gets one more week because the insight felt too good to be wrong
- The hook nobody will rewrite because a senior person wrote it
- The strategy defended in the review instead of tested in the account
- The conclusion reached on day two and protected from every number that arrived afterwards

Each of those is billed to somebody, and it is never the person holding the opinion.

So I try to hold positions strongly and drop them cheaply. Strong, because a strategist with no conviction produces work with no spine. Cheap, because the entire skill is being wrong quickly, and being wrong quickly requires that being wrong costs nothing socially.

**The consequence I hold myself to.** When a test contradicts me I want to say so in the room before anyone else raises it. Getting there first is the only way the correction stays cheap.`,
  },
  {
    id: "learning",
    n: "03",
    title: "The account is always learning. So am I.",
    claim: "Neither of us ever finishes learning.",
    markdown: `Meta labels a phase "learning" and then removes the label, which implies the system arrived somewhere. It did not. It keeps updating the whole time, and it only stops narrating the process.

The account re-enters that state constantly. New creative, a budget change, an audience shift, a competitor entering the auction, a season turning. Every one of those makes the model's existing picture slightly wrong, and it starts correcting again.

The operator is running the identical loop. Every account teaches something the last one could not. Every dead test revises a belief that felt settled. Anyone who has stopped being surprised by their own data has stopped looking closely enough at it.

I find that genuinely good news, for a reason that has nothing to do with optimism. A discipline where the ground keeps moving is one where accumulated attention compounds and credentials decay. The person who has been paying attention for two years with full intensity can be more current than someone coasting on five, because most of what mattered five years ago has already been deprecated.

There is a nice symmetry in it. The thing I operate and the person operating it improve by the same mechanism: run, be wrong, update on the difference. I like working on a system that holds me to its own rule.

**The consequence I hold myself to.** I expect a meaningful share of what I believe today to be revised within six months, and I want to be the one who finds the revision.`,
  },
  {
    id: "hook",
    n: "04",
    title: "The hook is the gate everything else waits behind.",
    claim: "If nobody stops, nothing else you wrote matters.",
    markdown: `This one needs no defence. It is arithmetic.

At a 20% hook rate, four out of every five dollars bought an impression that never became attention. The mechanism, the proof stack, the storytelling, the risk reversal, the offer you spent a week structuring: all of it sat behind a door that 80% of the audience walked past. None of it got graded.

So the hook earns a share of effort that looks disproportionate until you do that maths. Roughly 70 to 80% of the writing effort belongs in the first three seconds, and it is the single hardest part to hand to a model, because it runs on instinct that is difficult to articulate and therefore difficult to teach.

The part people miss is that the hook is also the targeting. It decides who stops, which decides who converts, which decides which pocket the platform delivers into next. A hook that stops everybody qualifies nobody, and CPA punishes it. A hook that stops one specific person hands the algorithm a clean signal about who this ad is for.

Which reframes what a good hook is doing. It is filtering as much as it is attracting.

**The consequence I hold myself to.** Every script carries two or three alternate openings with a written rationale each, because the opening is the variable most worth resolving before spend and the one I am least entitled to be confident about.`,
  },
  {
    id: "feed",
    n: "05",
    title: "The competition is the entire feed.",
    claim: "Your ad has to be worth more than a photo of someone's dog.",
    markdown: `Competitor ads are a small slice of what an ad actually competes with. The real field is everything else in the scroll: someone's holiday, an argument about geopolitics, a meme that landed, a stranger's genuinely surprising life update.

That content has two advantages, and both are structural.

It was engineered by people whose only objective is attention, with no obligation to sell anything at the end. And it arrives with permission. Nobody scrolls past their friend's post feeling interrupted.

An ad carries the heavier load. It has to earn the attention, then convert it, against material optimised for the first job alone. The bar in the feed is not set by the category's best advertiser. It is set by the best thing in the scroll that day, and the best thing in the scroll had no CTA to ruin its ending.

Two things follow, and they shape most of what I make.

**Native formats work because they borrow the feed's permission.** An iMessage thread, a review screenshot, a text post, a piece of long-form editorial that reads like something a person wrote. The format itself buys a second of benefit of the doubt, and a second is most of what is available.

**The organic feed is a live research source.** The memes, skits, and formats an audience already rewards are a record of what earns their attention when nothing is being sold. That is why the inspiration layer sits on top of the constraint set rather than beside it.

**The consequence I hold myself to.** Before writing for a category I spend time in the audience's actual feed, on the assumption that what they already stop for tells me more than what competitors are running.`,
  },
  {
    id: "personalization",
    n: "06",
    title: "Write to one person, then do it again.",
    claim: "The ad picks who sees it. So write to one person.",
    markdown: `Broad targeting produces average creative, and average creative is what the auction prices worst.

This used to be a copywriting preference. It is now a distribution fact. Andromeda reads the creative itself and decides who to show it to, which means the angle, the hook, and the language perform the audience selection that interest settings used to. The ad is the targeting.

That inverts the old order. Personalization stopped being polish applied at the end and became the mechanism by which an ad reaches anyone at all. An asset written to nobody in particular gives the system nothing to match on, so it gets matched loosely, delivered badly, and reads to every viewer as addressed to someone else.

The working unit is smaller than a persona. It is who someone is right now, in this situation, with this trigger: the 47-year-old who just caught her own reflection in a shop window, the owner who noticed the dog stop at the same corner twice this week. One product yields dozens of those. Most deserve to be cut, and the ones that survive each get written as though they were the only reader.

Which is what makes volume and specificity compatible rather than opposed. A hundred generic assets are one asset repeated. Thirty specific ones are thirty different doors.

**The consequence I hold myself to.** The test on any finished ad is whether one specific person could read it and think somebody has been watching me. Anything that lands short of that reaction is still a draft.`,
  },
  {
    id: "direct-response",
    n: "07",
    title: "Persuasion is a kitchen, and I like cooking in it.",
    claim: "The best ad I write makes someone's life a little better.",
    markdown: `Here is the thing that actually hooked me on direct response.

A stranger scrolls past. Forty seconds later they believe something they did not believe before, and they do something about it. No conversation happened. No one argued with them. A sequence of words and pictures, assembled in the right order, moved a person.

That still amazes me.

And it is a real force, which means it points wherever you aim it. The same sequence that gets someone to buy a supplement they will feel in six weeks can get them to buy something that does nothing. Same craft. Same buttons. The only difference is the person holding it.

So I aim it at the thing I would tell my own family to buy. That sounds simple and it does most of the work, because you cannot write a believable mechanism for a product that has none, and agitation about a pain the product will not fix is just cruelty with a CTA at the bottom.

**What I love is the recipe.** Every ingredient is sitting on the counter, and almost anyone can name them: a story, a mechanism, an agitation, a piece of education, proof, a picture of the after, an ask. Handing someone that list changes nothing. The craft is knowing which four of the seven this person needs, in what order, and how long to hold each one before moving.

A cold reader needs the problem named before they will accept an explanation. Explain first and you are teaching someone who has not agreed there is anything to learn. A reader who already knows the problem is bored by agitation and wants the mechanism immediately. Same ingredients, opposite order, and the wrong order kills it.

Agitation is where that responsibility gets sharpest. Done badly it manufactures a wound so you can sell the bandage. Done properly it names something the person has already been carrying without words for it, and being handed the words is a relief. "You are not failing the supplement, the supplement is failing you." Nothing was invented there. Somebody just got told the truth about their own experience in a sentence they could not build themselves.

That is the version of this job I want. Take somebody who has quietly accepted a thing about their life, hand them a better explanation of it, and point at a door.

**The consequence I hold myself to.** Before writing a line I ask whether I would send this ad to someone I love. If the honest answer is no, the problem is the product or the claim, and no amount of craft is going to fix it.`,
  },
];
