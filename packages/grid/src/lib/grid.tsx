import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
}

export default function Grid({ children, columns = 3, gap = "gap-4" }: GridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} ${gap}`}>
      {children}
    </div>
  );
}
