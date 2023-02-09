import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import {
  multiplierSliceActions,
  asyncMultiply,
  multiplyIfOdd,
  selectValue,
} from './multiplierSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const multiplierValue = useSelector(selectValue);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <React.Fragment>
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Divide value"
            onClick={() => dispatch(multiplierSliceActions.divide())}
          >
            / 
          </button>
          <span className={styles.value}>{multiplierValue}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(multiplierSliceActions.multiply())}
          >
            *
          </button>
        </div>
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => dispatch(multiplierSliceActions.multiplyBy(incrementValue))}
          >
            Multiply by
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(asyncMultiply(multiplierValue))}
          >
            Async Multiply
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(multiplyIfOdd(incrementValue))}
          >
            Multiply If Odd
          </button>
        </div>
      </div>
    </React.Fragment>  
  );
}
