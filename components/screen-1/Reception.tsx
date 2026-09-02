"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { RECEPTION } from "@/content/copy";

/**
 * The reception panel, last block on the landing page.
 *
 * Raw LinkedIn screenshots, deliberately unstyled inside their frames. The
 * whole value of the thing is that it looks like a screenshot rather than a
 * testimonial someone typeset, so the only treatment is a border and a corner
 * radius.
 *
 * Public comments keep their names, since those people commented in public and
 * the attribution is the proof. Private messages have the sender's name barred
 * and their avatar pixelated. The copy leaves that unremarked, because a barred
 * name already reads as privacy and explaining it sounds defensive.
 *
 * The shots are legible in the grid on a large screen and small on a laptop,
 * so each one opens full size in a lightbox. Alt text carries the quote,
 * because otherwise the entire section is invisible to a screen reader.
 */

type Shot = { src: string; w: number; h: number; alt: string };

const SHOTS: Shot[] = [
  {
    src: "/proof/comment-01.png",
    w: 621,
    h: 347,
    alt: "LinkedIn comment from Brennan Zielinski, VP of Creative Strategy: Love the ads manager style portfolio, nice touch.",
  },
  {
    src: "/proof/comment-02.png",
    w: 622,
    h: 917,
    alt: "LinkedIn comment thread. Zaria Brown: I just looked at your portfolio and holy crap, that is genuinely one of the most creative things I have ever seen. Taha Rizvi: Insane. Devdarsh Nambiar: Crazy work.",
  },
  {
    src: "/proof/comment-03.png",
    w: 627,
    h: 387,
    alt: "LinkedIn comment from Hassan Ajanaku, senior direct response marketer: this has to be one of the most creative ways to showcase your portfolio. Well done, man.",
  },
  {
    src: "/proof/message-01.png",
    w: 527,
    h: 370,
    alt: "Direct message, sender's name covered: I have seen this. You have made it quite interesting. I would love to know more about what you are doing currently, and if you are looking for something full time or freelance.",
  },
  {
    src: "/proof/message-02.png",
    w: 497,
    h: 347,
    alt: "Direct message, sender's name covered: I saw your portfolio, it is pretty great. Are you working with any brand or agency? I think seriously your knowledge and spec work is really good.",
  },
  {
    src: "/proof/message-03.png",
    w: 522,
    h: 253,
    alt: "Direct message, sender's name covered: Just saw your portfolio, such a creative way to showcase your work. That is amazing.",
  },
  {
    src: "/proof/message-04.png",
    w: 530,
    h: 172,
    alt: "Direct message, sender's name covered: Bro your portfolio looks great. If you outreach to marketing agency or senior creative strategist, mostly likely you will get hired.",
  },
  {
    src: "/proof/message-05.png",
    w: 552,
    h: 163,
    alt: "Direct message, sender's name covered: Great portfolio bro.",
  },
];

export function Reception() {
  const [open, setOpen] = useState<Shot | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <section
      data-tour="reception"
      className="hero-item rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
    >
      <h2 className="text-[20px] font-bold text-[var(--color-text-primary)]">
        {RECEPTION.heading}
      </h2>
      <p className="mt-1 max-w-[680px] text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">
        {RECEPTION.lead}
      </p>

      {/* Multi-column rather than a grid: the shots are all different heights
          and the browser balances them without any per-item measurement. */}
      <div className="mt-4 gap-3 [column-fill:balance] columns-1 sm:columns-2 lg:columns-3">
        {SHOTS.map((shot) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setOpen(shot)}
            aria-label={`Open full size: ${shot.alt}`}
            className="mb-3 block w-full cursor-zoom-in overflow-hidden rounded-md border border-[var(--color-border-light)] break-inside-avoid transition-shadow hover:shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-meta-blue)]"
          >
            {/* No sizes attribute on purpose. These render around 330px wide in
                the grid, and a sizes hint makes Next serve a candidate that
                narrow, which softens screenshot text past reading. Leaving the
                intrinsic width to drive the srcset serves roughly double that,
                so the type stays sharp. */}
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.w}
              height={shot.h}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {/* Portalled to the body on purpose. Framer drives a transform on the
          hero's main element, and a transformed ancestor becomes the containing
          block for position:fixed, which pins the overlay inside this section
          instead of over the viewport. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
            onClick={close}
            className="fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/75 p-4"
          >
            {/* Width set explicitly. Left to the intrinsic size the browser
                halves it, since the srcset candidate carries a 2x descriptor,
                and the shot would open smaller than its own thumbnail. The
                floor of 680 gives every shot a readable size on a desktop at
                barely any upscale, and max-w-full takes back over on a phone. */}
            <Image
              src={open.src}
              alt={open.alt}
              width={open.w}
              height={open.h}
              style={{ width: Math.max(open.w, 680) }}
              className="h-auto max-h-[90vh] max-w-full rounded-md bg-white object-contain shadow-[var(--shadow-modal)]"
            />
          </div>,
          document.body,
        )}
    </section>
  );
}
