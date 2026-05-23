"use client";

import AnimateText from "@/components/AnimateText";

function Info() {
  return (
    <div className="info">
      <div className="col">
        <img src="/img1.png" alt="" />
      </div>

      <div className="col flex-col gap-[2em] h-screen">
        <AnimateText delay={1}>
          <p className="text-lg">
            Front-End Developer specializing in React, Next.js, and modern web
            experiences. Passionate about building bold, interactive, and
            performance-focused interfaces with clean architecture, smooth
            animations, and attention to detail. I enjoy turning complex ideas
            into scalable digital products that feel intuitive, modern, and
            visually impactful.
          </p>
        </AnimateText>

        <AnimateText delay={1}>
          <p className="text-lg">
            Beyond code and screens, I enjoy chess, running, gym sessions, and
            meaningful conversations. I believe the best connections don’t
            always start with work — sometimes they start with shared interests,
            good energy, and real friendship.
          </p>
        </AnimateText>
      </div>
    </div>
  );
}

export default Info;
