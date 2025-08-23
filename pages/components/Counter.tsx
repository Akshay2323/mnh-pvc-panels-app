"use client";
import { useEffect, useState } from "react";

export default function Counter({ label, value, unit }: { label: string; value: number; unit?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(value / 50);
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setDisplay(current);
    }, 50);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter counter-vertical counter-icon">
      <div>
        <h3>{label}</h3>
        <div className="value">
          <span className="text-md">{display}</span>
          {unit && <span>{unit}</span>}
        </div>
      </div>
    </div>
  );
}
