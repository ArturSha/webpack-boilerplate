import { Suspense, useCallback, useState } from 'react';

import imag from '../assets/avatar.jpg';
import cls from './Test.module.css';
import './styles/App.css';
import './styles/reset.css';

export const App = () => {
  const [count, setCount] = useState(1);
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <Suspense fallback="Loading...">
      <h1>{count}</h1>
      <img alt="userAvatar" src={imag} width={50} />
      <button className={cls.test} onClick={handleCount}>
        click
      </button>
    </Suspense>
  );
};
