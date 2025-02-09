import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

interface WorldProps {
  className?: string;
}

export function World({ className }: WorldProps) {

  const divRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const worldCls = clsx("bg-white", className);

  useEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <>
      <div ref={divRef} className={worldCls}></div>
      <p>
        Width: {size.width}, Height: {size.height}
      </p>
    </>
  );
}

export default World;
