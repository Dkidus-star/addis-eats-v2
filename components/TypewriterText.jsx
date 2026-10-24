"use client";

import { useState, useEffect } from "react";

export function TypewriterText({
  words = [
    "Authentic Doro Wat.",
    "Sizzling Shekla Tibs.",
    "Spiced Special Kitfo.",
  ],
  typingSpeed = 95,
  deletingSpeed = 45,
  pauseTime = 1800,
  className = "text-amber-500",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    if (!isDeleting && subIndex === currentWord.length) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{words[index % words.length].substring(0, subIndex)}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block w-[3px] h-[0.95em] bg-current animate-pulse"
      />
    </span>
  );
}
