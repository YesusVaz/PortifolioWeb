"use client";

type MaterialSymbolProps = {
  name: string;
  className?: string;
};

export function MaterialSymbol({ name, className = "" }: MaterialSymbolProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
