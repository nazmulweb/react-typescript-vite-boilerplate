import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const themeStyle = useSelector((state: any) => state.theme);
  return (
    <div className=" bg-slate-300 dark:bg-slate-800">
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
