import React, { useState, useEffect, useMemo, useCallback } from "react";

interface ObfuscatedTextProps {
  text: string;
  underline?: boolean;
  icon?: React.ReactElement;
}

function ObfuscatedText({ text, underline, icon }: ObfuscatedTextProps): JSX.Element {
  const [obfuscatedText, setObfuscatedText] = useState<string>(text);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const specialChars = useMemo(() => new Set(["/", " ", "→"]), []);
  const chars = useMemo(() => "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()", []);

  const obfuscateText = useCallback(
    (text: string, revealedIndices: number[]): string => {
      return text
        .split("")
        .map((char, index) => {
          if (specialChars.has(char) || revealedIndices.includes(index)) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
    },
    [specialChars, chars]
  );

  useEffect(() => {
    let intervalId: number;

    if (isHovered) {
      const indices = [...Array(text.length).keys()];
      const shuffledIndices = indices.sort(() => Math.random() - 0.5);
      let revealedCount = 0;

      const startTime = Date.now();
      const duration = 500; // 500ms effect

      intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        revealedCount = Math.floor(progress * indices.length);

        const revealedIndices = shuffledIndices.slice(0, revealedCount);
        setObfuscatedText(obfuscateText(text, revealedIndices));

        if (progress === 1) {
          clearInterval(intervalId);
        }
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isHovered, obfuscateText, text]);

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative">
        <span className={`${isHovered ? "opacity-0" : "opacity-100"}`}>{text}</span>
        <span
          className={`absolute top-0 left-0 ${isHovered ? "opacity-100" : "opacity-0"} ${
            underline && "underline"
          } `}
        >
          {isHovered ? obfuscatedText : text}
        </span>
      </span>
      {icon && <span className="ml-1 mb-1">{icon}</span>}
    </span>
  );
}

export default ObfuscatedText;
