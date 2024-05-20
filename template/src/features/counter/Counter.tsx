import { useState } from "react";
import { Button, Input } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <h2 id="label-counter">Counter Controlled By Redux</h2>
      <span>Current counter value is {count}</span>
      <Button
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={() => dispatch(decrement())}
      >
        Decrement Synchronous
      </Button>
      <Button
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment Synchronous
      </Button>

      <label htmlFor="incAmount">IncrementAmount</label>
      <Input
        id="incAmount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <Button
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </Button>
      <Button
        onClick={() => {
          void dispatch(incrementAsync(incrementValue));
        }}
      >
        Add Async
      </Button>
      <Button
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={() => dispatch(incrementIfOdd(incrementValue))}
      >
        Add If Odd
      </Button>
    </>
  );
}
