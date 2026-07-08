"use client";

import { useEffect, useState } from "react";

const biography =
  "Min-jae Han developed his cinematic voice between Seoul’s independent film scene and Berlin’s experimental cinema community. After creating a series of acclaimed short films recognised at international festivals including the Berlinale, he moved into commercial filmmaking with a focus on emotion, atmosphere and visual precision. His work blends rich colour, human performances and a refined sense of composition, creating films that feel cinematic, authentic and deeply connected to the world of each brand.";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setAtBottom(nearBottom);
    };

    checkPosition();
    window.addEventListener("scroll", checkPosition);

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  const handleScroll = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section")
    );

    const nextSection = sections.find(
      (section) => section.getBoundingClientRect().top > 80
    );

    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="profile-navigation">
        <button
          type="button"
          className="profile-button"
          onClick={() => setOpen(true)}
        >
          Profile
        </button>

        <button
          type="button"
          className="profile-scroll-button"
          aria-label={atBottom ? "Scroll to top" : "Scroll down"}
          onClick={handleScroll}
        >
          {atBottom ? "↑" : "↓"}
        </button>
      </div>

      {open && (
        <div
          className="profile-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-title"
        >
          <button
            type="button"
            className="profile-close"
            aria-label="Close profile"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <header className="profile-heading">
            <p>Min-jae Han</p>
            <h2 id="profile-title">Profile</h2>
          </header>

          <section className="profile-bio">
            <h3>Biography</h3>
            <p>{biography}</p>
          </section>

          <section className="profile-contact">
            <h3>Contact</h3>

            <div className="profile-contact-grid">
              <div>
                <span>Email</span>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>

              <div>
                <span>Commercial Agent</span>
                <a href="mailto:commercial@example.com">
                  commercial@example.com
                </a>
              </div>

              <div>
                <span>Film Agent</span>
                <a href="mailto:film@example.com">film@example.com</a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}