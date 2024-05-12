import { useState } from 'react';
import { Heading, Form, ActionButton, Well, TextField } from '@adobe/react-spectrum';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <Heading level={1} id="label-counter">Counter Controlled By Redux</Heading>
      <Well>Current counter value is {count}</Well>
      <Form maxWidth="size-3600" aria-labelledby="label-counter">
        <ActionButton onPress={() => dispatch(decrement())}>
          Decrement Synchronous
        </ActionButton>
        <ActionButton
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        >
          Increment Synchronous
        </ActionButton>

        <TextField
          label="Increment amount"
          value={incrementAmount}
          onChange={setIncrementAmount}
        />
        <ActionButton
          onPress={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </ActionButton>
        <ActionButton
          onPress={() => {
            void dispatch(incrementAsync(incrementValue));
          }}
        >
          Add Async
        </ActionButton>
        <ActionButton onPress={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </ActionButton>
      </Form>
    </>
  );
}
