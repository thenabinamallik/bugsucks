import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { words } from "./Data";

export function TypingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[wordIndex];

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      // TYPING
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex((i) => i + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 700); // pause at full word
        }
      }

      // DELETING
      else {
        if (charIndex > 0) {
          setCharIndex((i) => i - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, currentWord.length]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient-accent">
        {currentWord.slice(0, charIndex)}
      </span>

      {/* Cursor */}
      <motion.span
        className="ml-1 inline-block h-6 w-0.2 bg-primary"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
}
