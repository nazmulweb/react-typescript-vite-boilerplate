/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './view';
import type { RootState } from './app/store';
import { decrement, increment } from './counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
