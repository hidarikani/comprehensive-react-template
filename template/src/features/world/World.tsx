import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

interface WorldProps {
  worldState: number[];
  className?: string;
}

export function World({ worldState, className }: WorldProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const worldCls = clsx("bg-white flex gap-4", className);

  useEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  const cells = worldState.map((cell, index) => {
    const cellCls = clsx("w-4 h-4", {
      "bg-black": cell === 1,
      "bg-gray-200": cell === 0,
    });

    return <div key={index} className={cellCls}></div>;
  });

  return (
    <>
      <div ref={divRef} className={worldCls}>
        {cells}
      </div>
      <p>
        Width: {size.width}, Height: {size.height}
      </p>
    </>
  );
}

export default World;
