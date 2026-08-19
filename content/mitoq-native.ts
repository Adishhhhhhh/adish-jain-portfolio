import type { Concept } from "./types";

// MitoQ long-form native statics.
//
// Three of the Unaware ad set's story scripts, run as written ads. The format
// works because the story does the selling and the image only has to buy the
// first two seconds: an archival photograph reads as a history post rather
// than an ad, which is the permission a native format borrows.
//
// The copy is verbatim. Not a word is changed from the script as written, and
// the section markers are kept, so the card renders them as labels instead of
// stripping them out.
//
// Art direction for each sits in rationale.diversePotential.

export const MITOQ_NATIVE_CONCEPTS: Concept[] = [
  {
    id: "mq-native-stasi",
    brand: "mitoq",
    format: "static",
    awareness: "unaware",
    status: "spec",
    state: "produced",
    nativeLongForm: true,
    conceptName: "Native Long-Form #1: The Stasi File",
    builtDate: "Built Aug 2026",
    asset: "/assets/native/mq-stasi-file.jpg",
    caption: `### **HOOK & STORY OPENING**

This woman named Maria survived the most brutal psychological torture from the East German police, and here’s what it means for your psychological health

In 1983, a man named Klaus Hoffmann had a perfect record.

He was an interrogator for the East German secret police, the Stasi

Over three years, he broke 127 prisoners using psychological manipulations

Their methods were ruthless…

No sleep… constant bright lights… loud noises at random intervals… and every kind of scientifically designed psychological tortures to destroy the mind.

Eventually, all of them confessed within 24 - 48 hours

Until prisoner 128.

Named Maria. An ordinary 34-year-old worker arrested for political reasons.

who even after a week of relentless interrogation, never broke.

He wrote in his classified report: *"Subject demonstrates impossible cognitive endurance."*

When the Berlin Wall fell and those Stasi files were reopened…

A research team in Berlin found the answer.

To tackle the torture and the amount of psychological stress created by it…

The brain produces massive energy…

And every time it produces energy it naturally leak toxins in the form of free radicals as a by product

These toxins then damage the mitochondria, which is responsible for every function your body does from thinking to talking, the very source of energy itself…

This explains why as you age you struggle with brain fog, poor memory, constant anxiety, and afternoon crashes…

The accumulated damage those prisoners have to face in just a few days is happening to you in years…

So when these get constantly damaged eventually your brain shuts down and gives in…

But Maria had naturally built stronger cellular defense systems that neutralized those free radicals faster than the stress could create them.

The neurologists called it *"elevated mitochondrial antioxidant activity."*

### **THE CHALLENGE**

Researchers tried to develop antioxidants that could replicate the same level of cellular protection…

Because it meant sharp cognitive abilities, strong memory, and quick decision making

But developing such an antioxidant was no easy task for two reasons.

One. It had to target the mitochondrial level because that's where the radicals are created.

Two. The mitochondria has a protective layer that is extremely selective about what it lets inside.

Many developed antioxidants like CoQ10, NAD+, Omega 3, and B-vitamins.

But none could enter the mitochondria

They were either too large, untargeted, or simply lacked the structure required to enter the mitochondria

They masked the problem temporarily, but beneath the surface, radicals continued damaging the mitochondria.

### **THE SOLUTION**

This remained the case until 1999.

Two Scientists in New Zealand, after 25 years of research, created a molecule that not only entered but stayed there, cycling continuously to protect it 24/7.

It went through 900+ peer-reviewed studies and earned over 60 global patents.

The molecule is called **Mitoquinol Mesylate.**

It reaches your brain cells at concentrations 100 to 1,000 times higher than standard antioxidants, delivering protection exactly where the damage happens.

It stops brain cell damage before it accumulates

It restores the mental sharpness that free radicals have been stealing from you for years.

This became the world’s first mitochondria-targeted antioxidant tested in human clinical trials

The results exceeded expectations:

**ATP production increased by 69%** - meaning steady mental energy throughout the day, no more afternoon crashes, and sharper thinking that lasts from morning to night.

**Oxidative stress damage dropped by 48%** - meaning less brain cell damage from radicals over time, healthier cells that last longer, and protection against daily stress.

**Natural antioxidant capacity increased by 36%** - meaning your brain's own defense system gets stronger, you build resilience against mental demands, and your cells can protect themselves.

Most brands don't have it. They can't manufacture it. They don't understand the mechanism.

And there's only one brand that I trust which delivers the exact formulation required for this to work.

### **PRODUCT INTRODUCTION**

Their name is **MitoQ Pure.**

The only company manufacturing capsules with the precise amount of Mitoquinol Mesylate needed to protect your brain cells

It's backed by institutions like Cambridge, UCLA, and Harvard. Have over 900 peer-reviewed studies, and 60+ global patents protecting the technology.

This is cellular repair. You're reversing years of accumulated damage while building long-term protection.

The recommended protocol is 90 days minimum.

Three months to give your mitochondria the sustained defense they need to fully recover and maintain their capacity.

### **THE STAKES & URGENCY**

And every second you wait

Free radicals accumulate and the damage keeps compounding

The difference between sharp thinking and cognitive fog isn't willpower. **It's whether your mitochondria are protected or being destroyed.**

Right now, MitoQ has stock. But they've already sold out twice this year because the manufacturing process is complex and can't be rushed.

Click below to get MitoQ Pure.

If you can still click through, they have inventory. But based on demand, that won't last long.`,
    hooks: [
      {
        line: `This woman named Maria survived the most brutal psychological torture from the East German police, and here’s what it means for your psychological health`,
        rationale:
          "Names a real person and an extreme event in one line, then withholds the connection to the reader's own health until the story earns it. A survivor of documented torture is authority the category cannot manufacture.",
      },
    ],
    rationale: {
      angle:
        "Cognitive resilience under extreme psychological stress. Positions mental decline as accumulating cellular damage rather than age, which makes it something you can defend against.",
      icp:
        "The High-Functioning Executive, whose working life is sustained cognitive pressure and who reads brain fog as a personal failing.",
      hookStrategy:
        "Historical authority plus impossible human performance. A perfect record broken once, by one person, in a documented file. The reader needs the explanation before they can put the phone down.",
      whyItWorks:
        "Executives recognise the state without having a name for it. The Stasi frame supplies extreme proof: if cellular defence held a mind together under engineered torture, the same mechanism is what is quietly failing during an ordinary Tuesday afternoon.",
      strategicIntent:
        "Enter at Unaware. Sell the mechanism, never the product, until the reader already believes free radical damage is what has been taking their sharpness.",
      diversePotential:
        "ART DIRECTION. The curiosity object is the document. Overhead photograph of an opened East German Stasi case file on a scuffed wooden desk, shot slightly off square so it reads as placed rather than scanned. The typed page is heavily redacted, thick black bars over most of the body text, with exactly one line left legible: SUBJECT DEMONSTRATES IMPOSSIBLE COGNITIVE ENDURANCE. A paper-clipped identity photograph of an unsmiling woman in her late thirties, 1980s East German passport style, sits in the top corner. Faded ministry stamps in German, a handwritten case number, manila folder edges, a cracked leather desktop. Raking window light from the left, mild film grain, muted institutional palette of grey-green, manila and ink black. Shallow depth of field so the legible line sits sharpest. No product, no branding, no headline overlay, no modern objects. 4:5 vertical. Redaction is the engine here: a page that is eighty percent blacked out with one readable sentence forces the read.",
      campaignRole:
        "Unaware entry point for the cold audience, running alongside the VSL of the same story. The static carries readers who will not start a video.",
    },
  },

  {
    id: "mq-native-shackleton",
    brand: "mitoq",
    format: "static",
    awareness: "unaware",
    status: "spec",
    state: "produced",
    nativeLongForm: true,
    conceptName: "Native Long-Form #2: The Endurance Split",
    builtDate: "Built Aug 2026",
    asset: "/assets/native/mq-shackleton-haul.jpg",
    caption: `**HOOK/MICRO-LEAD**

Here's how 8 men in their 40s hauled 2,000-pound lifeboats across Antarctic ice on just 6 hours of sleep...

While you're wiped by 3 PM... even after a full night's sleep.

What they did will shock you.

By the end, you'll know exactly how to erase every trace of tiredness from your body.

**BODY - THE EXPEDITION**

In 1914, Ernest Shackleton set out to cross Antarctica.

But his ship, the Endurance, got trapped and crushed by pack ice.

The ship sank after 25 days.

His 28-man crew was trapped 497 days in conditions that should've killed them in weeks.

To survive, they hauled lifeboats across endless ice shelves, hunted seals, and rationed every calorie while fighting frostbite and exhaustion.

Eventually, the situations were so extreme, they once had no choice but to eat their own sled dogs.

Through sheer endurance and leadership, Shackleton led all 28 men to safety. Not one died.

When they were finally rescued in 1916, doctors ran blood tests.

They found something that made no sense.

The entire crew ate the same food. Pemmican. Seal meat. Blubber.

Yet 8 men functioned on just 6 hours of sleep and hauled lifeboats like machines.

The rest needed 12 to 14 hours and could barely perform basic tasks.

Constantly dragging. Collapsing.

Same calories. Same conditions. Completely different energy.

The blood analysis revealed why.

**BODY - THE DISCOVERY**

The exhausted and energized groups ate the same amount of food.

But there was one slight difference in what they ate that created massive gap in energy

Those 8 consumed seal liver. The rest ate pemmican, meat, and blubber.

At first, scientists thought it was just a difference in nutrients.

But deeper analysis showed something else.

Seal liver contains the highest natural concentration of CoQ10 of any food on earth.

100 to 200 milligrams per 100 grams.

This allowed massive energy production without free radical attacks.

Your mitochondria are the power plants inside every cell.

They produce all your energy. Thinking. Moving. Everything.

While producing energy, they leak free radicals as a byproduct.

These radicals attack your mitochondria... your energy source.

This is why you feel exhausted even when doing everything right.

Sleeping 8 hours. Eating clean. Exercising. Taking supplements.

Every time your mitochondria generate energy, they leak radicals that steal that energy back.

It's a constant energy tax.

You never get 100% of the energy. The more you need, the more tax you pay. It's a vicious cycle.

Your body naturally produces CoQ10.

But your mitochondria are surrounded by a negatively charged barrier that blocks most molecules... including CoQ10.

Seal liver isn't just concentrated with CoQ10... it's wrapped in an omega-3 fat matrix that helped deliver it directly into mitochondrial membranes.

Providing protection from free radical attacks.

They produced massive energy without paying the tax.

But eating 400 grams of seal liver daily isn't realistic.

After this discovery, companies tried replicating it. Antioxidants and supplements flooded the market.

CoQ10, NAD+, fish oil, B-vitamins... but none could reach where radicals form.

Because cellular protection unlocked near-supernatural abilities...

Sustained energy. Faster recovery. Better mobility. Every organ is at full potential. Just Like not paying tax gives you more buying power.

But most of the supplements float outside the barrier until you pee them out.

Too large or lacking the delivery mechanism.

**BODY - THE SOLUTION**

But there's one molecule that turned out to solve this.

It was engineered In 1999

After 25 years of research and $60 million investment, two scientists created the world's first mitochondrial-targeted antioxidant.

Backed by Cambridge, UCLA, and Harvard.

Over 900 peer-reviewed studies.

Over 60 global patents.

It's called Mitoquinol Mesylate. Same CoQ10 molecule with a unique delivery mechanism.

They attached a positive charge.

That positive charge gets pulled through your mitochondria's negative barrier like a magnet.

The clinical results weren't subtle. They were beyond expectations.

It concentrates 100 to 1,000 times higher than regular CoQ10.

Radical damage dropped 48%. Cellular damage making you feel decades older is significantly reduced.

Energy production improved up to 69%. Sustained energy that lasts. The tax was reduced... more energy available.

Natural antioxidant defenses increased 36%. You recover faster from poor sleep and stress instead of needing days to bounce back.

Chronic fatigue eliminated.

Chronic inflammation destroying your joints and mood?

It reduces measurably. You move easier. Think clearer. Feel like yourself again.

You're no longer trapped in an exhausted body.

**CTA**

As of now there’s only one brand that manufactures the precise formulation: MitoQ Pure.

The recommended protocol is 90 days minimum.

This isn't a quick fix. It's cellular healing. You're reversing years of accumulated damage while building long-term protection.

Few people know about this as they're a small company.

Still they sell out quickly. The manufacturing process is complex and can't be rushed.

If you can checkout, you're lucky.

Click below to secure your supply before they sell out again.`,
    hooks: [
      {
        line: `Here's how 8 men in their 40s hauled 2,000-pound lifeboats across Antarctic ice on just 6 hours of sleep...`,
        rationale:
          "Two numbers doing the work: 2,000 pounds hauled on 6 hours of sleep, set directly against the reader being finished by 3pm on a full night. The gap between those two states is the whole ad.",
      },
    ],
    rationale: {
      angle:
        "Differential energy under identical conditions. Reframes exhaustion as a cellular tax being paid rather than a shortage of sleep, calories, or willpower.",
      icp:
        "The Active Grandparent and the Performance Optimizer. Both are doing everything correctly and still running out of energy by mid afternoon.",
      hookStrategy:
        "Historical survival story with a metabolic mystery inside it. Same inputs, opposite outputs, which is a gap the brain refuses to leave open.",
      whyItWorks:
        "It removes blame before it sells anything. The reader has been told for years that fatigue is a discipline problem. This says eight men in the same conditions on the same rations had a different outcome, and the variable was cellular protection.",
      strategicIntent:
        "Establish the energy tax as the mechanism, then show why food cannot deliver the fix and engineering can.",
      diversePotential:
        "ART DIRECTION. The curiosity object is the disparity, so it has to live inside one frame. Wide monochrome expedition photograph on Antarctic pack ice, 1915. In the foreground eight men in canvas and wool haul a heavy wooden lifeboat on ropes, leaning hard into it, clearly in motion. In the middle distance of the same frame, four or five other men in identical clothing are stopped: one sitting on a crate, one doubled over, one being helped upright. Same clothing, same light, same ice, visibly different physical states. Flat overcast polar light, low horizon, the crushed ship's mast small on the skyline. Frank Hurley silver gelatin aesthetic: heavy grain, blown highlights in the snow, scratches and emulsion damage at the edges, slight vignette. No colour, no product, no text overlay, no modern gear. 4:5 vertical. The composition is the argument: the eye reads the working group, finds the collapsed group, and asks why.",
      campaignRole:
        "Unaware entry point for the energy and endurance cluster, pairing with the Foundation vs Symptoms mechanism assets further down the funnel.",
    },
  },

  {
    id: "mq-native-olive-mill",
    brand: "mitoq",
    format: "static",
    awareness: "unaware",
    status: "spec",
    state: "produced",
    nativeLongForm: true,
    conceptName: "Native Long-Form #3: The Olive Mill Paradox",
    builtDate: "Built Aug 2026",
    asset: "/assets/native/mq-olive-mill.jpg",
    caption: `**HOOK**

Here's how Greek olive mill workers in the 1940s and 50s worked for 40+ years... chain-smoked every day... ate a high-fat diet...

And had zero heart attacks on record.

Not one.

While today, heart disease is the #1 killer even among people who eat clean, exercise, and never touch a cigarette.

What did those workers know that modern cardiology doesn't?

By the end, you'll know exactly what protected their hearts... and how to get that same protection without moving to Greece.

**BODY - THE MILL STORY**

Between 1930 and 1960, a small region in Greece had dozens of olive oil mills.

Workers crushed fresh olives by hand. 8 to 10 hours a day. For decades.

The work was brutal. The air was thick with olive mist. And most of these men smoked heavily while they worked.

Their diet? High in fat. Heavy on meat and cheese. Everything modern doctors tell you destroys your heart.

But when regional health officials reviewed medical records from 1930 to 1965, they found something impossible.

Zero heart attacks among mill workers with 40+ years on the job.

Not low rates. Zero.

Meanwhile, farmers in the same towns... eating the same food... had normal heart disease rates.

The only difference?

The mill workers breathed olive mist every single day.

**BODY - THE DISCOVERY**

When doctors investigated in the early 1970s, they found something in the workers' heart cells that shouldn't have been there.

A compound called hydroxytyrosol.

It only exists in the mist from freshly crushed olives.

And it was building up inside their heart mitochondria... the tiny power plants that fuel every heartbeat.

Here's why that mattered.

Your heart beats 100,000 times a day. Every single beat.

And every beat generates free radicals inside the mitochondria as a byproduct of energy production.

Think of free radicals as toxic exhaust your heart creates just by working.

Over time, these radicals damage the mitochondria. Energy production drops. The heart weakens.

That's how heart disease starts. Not on the surface.

Deep inside the cells powering every contraction.

But hydroxytyrosol did something most modern antioxidants can't.

It slipped directly into the mitochondrial membrane and neutralized those radicals at the source.

Before they could accumulate. Before they could cause damage.

The workers' hearts kept producing full energy for decades because something was protecting the mitochondria every single day.

**BODY - THE PROBLEM**

But here's the catch.

Hydroxytyrosol breaks down within 3 hours of the olives being crushed.

The moment oxygen hits it, it degrades.

That bottle of olive oil in your kitchen?

It has almost none left.

Even "extra virgin" olive oil sitting on a shelf for a week has lost the protective form.

**BODY - THE HUMAN MIRROR**

Your heart faces the same oxidative assault those workers did.

Every beat generates free radicals.

Every contraction creates damage inside the mitochondria.

But unlike them, you don't have daily protection penetrating the exact place where 90% of heart damage starts.

You'd need to drink 4 liters of fresh-pressed oil daily to get the same protection those workers got from just breathing the air, which does not sound convenient

And you can't recreate a 1950s olive mill in your kitchen.

And here's what makes the heart different from every other organ.

It never rests.

Your liver can recover overnight. Your muscles repair during sleep.

But your heart?

It beats 100,000 times today. 100,000 times tomorrow. Every day for your entire life.

Without mitochondrial protection, the damage compounds.

Energy production drops. The heart weakens. Irregular rhythms develop.

You get winded climbing stairs. Your chest feels tight during exertion. Your heart struggles to keep up with demands it used to handle easily.

This is mitochondrial failure. Not blockages. Not cholesterol.

Energy collapse at the cellular level.

The workers avoided this because hydroxytyrosol got inside their mitochondria daily.

You don't have that protection.

**BODY - THE FAILED SOLUTIONS**

After the discovery, researchers tried to replicate the workers' protection.

CoQ10. Omega-3s. Vitamin E. Resveratrol.

All proven antioxidants. All marketed for heart health.

But none could do what hydroxytyrosol did.

None could penetrate the mitochondrial membrane where the damage actually happens.

Your heart mitochondria are surrounded by a negatively charged barrier. Highly selective. Most molecules can't get through.

So those supplements float in your bloodstream... providing surface protection at best.

But the free radicals destroying your heart's energy system?

Still attacking. Still accumulating damage.

**BODY - THE SOLUTION**

However, there does exists one molecule that has proven to enter the mitochondria

1999

Two scientists in New Zealand engineered a molecule that solved this.

It wasn't discovered. It was built.

After 25 years of research and $60 million in investment, they created the world's first mitochondrial-targeted antioxidant specifically for heart cells.

It's called Mitoquinol Mesylate.

Same mechanism as hydroxytyrosol. Penetrates the mitochondrial membrane. Neutralizes free radicals at the source.

But unlike hydroxytyrosol, it doesn't degrade in hours.

It's stable.

It concentrates exactly inside the mitochondria powering every heartbeat.

They attached a positive charge to the molecule.

That charge gets pulled through your heart mitochondria's negative barrier like a magnet.

It concentrates at Complexes I and III... the exact sites where free radicals are generated during energy production.

And once inside, it doesn't neutralize one radical and disappear.

It cycles continuously. Stays there. Protects your heart mitochondria 24/7.

**BODY - THE CLINICAL PROOF**

The clinical results in heart health were significant.

Oxidative stress in heart cells dropped by 48%. The damage aging your cardiovascular system... measurably reduced.

Mitochondrial energy production improved by up to 69%. Your heart gets the fuel it needs to power 100,000 beats a day without failing.

Arterial inflammation decreased. Blood vessel function improved. Circulation strengthened.

People reported sustained energy during exercise. No more getting winded halfway through activities they used to handle easily.

Heart palpitations reduced. Irregular rhythms stabilized. The chest tightness during exertion... gone.

This wasn't masking symptoms. This was restoring cellular function.

The molecule is backed by Cambridge, UCLA, and Harvard.

Over 900 peer-reviewed studies.

Over 60 global patents protecting the technology.

**CTA**

Only one brand manufactures the precise formulation for cardiovascular protection: MitoQ Pure.

The recommended protocol is 90 days minimum.

This isn't a quick fix. It's cellular repair. You're reversing years of mitochondrial damage while building long-term heart protection.

Three months to give your heart mitochondria the sustained defense they need.

Few people know about this. They're a small company.

They've sold out twice this year because the manufacturing process is complex and can't be rushed.

If you can checkout, you're lucky.

Click below to secure your supply before they sell out again.

Your heart beats 100,000 times today. Give it the protection it's been working without.`,
    hooks: [
      {
        line: `Here's how Greek olive mill workers in the 1940s and 50s worked for 40+ years... chain-smoked every day... ate a high-fat diet...`,
        rationale:
          "Stacks three risk factors the reader has been taught are fatal, then removes the expected outcome. A paradox with a documented record behind it cannot be argued away, only explained.",
      },
    ],
    rationale: {
      angle:
        "Cardiovascular protection despite every risk factor. Repositions heart decline as mitochondrial energy failure rather than a cholesterol and blockage story.",
      icp:
        "Every ICP in the rotation. Cardiovascular fear is the one concern that crosses all of them, and it rises sharply past 45.",
      hookStrategy:
        "Paradox proof. Chain smokers, a high-fat diet, and zero heart attacks is a combination the reader cannot resolve on their own, which is the whole job of the first line.",
      whyItWorks:
        "It attacks a belief rather than a symptom. The reader has organised years of behaviour around cholesterol and exercise, and this says a group who did everything wrong were protected by something nobody was measuring. That reframe is what makes the mechanism land.",
      strategicIntent:
        "Use the mist as the visible version of the mechanism, then convert it into the delivery problem MitoQ exists to solve.",
      diversePotential:
        "ART DIRECTION. The curiosity object is the cigarette, because it is the detail that contradicts the outcome. Interior of a Greek stone olive mill, mid 1950s. A weathered man in his sixties stands beside the press, sleeves rolled, forearms and apron wet with olive pulp, a cigarette burning between his fingers at his side. He looks strong and unbothered, never sick or frail. The air is visibly thick with olive mist, caught in a hard shaft of light falling from a small high window, so the atmosphere itself is the most present thing in the frame. Stone, worn wood, woven baskets, oil-dark floor. Faded colour documentary treatment, warm ochre and dust with deep shadow, 1950s Kodachrome shift, visible grain, slight halation on the light shaft. Candid, mid-work, never posed for the camera. No product, no branding, no text overlay, no modern equipment. 4:5 vertical. A viewer's eye finds the cigarette, flags that this man should be unwell, and the copy is the only thing that resolves it.",
      campaignRole:
        "Broadest of the three at the Unaware stage, since cardiovascular concern crosses every ICP. Feeds the mechanism education assets in the Solution Aware set.",
    },
  },
];
