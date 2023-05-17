/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './view';
import { ConfigProvider, DatePicker, theme } from 'antd';
import ModeSwitcher from './components/template/ThemeConfigurator/ModeSwitcher';
import { Suspense } from 'react';

function App() {
  const themeStyle = useSelector((state: any) => state.theme);
  const mode = themeStyle.mode === 'light';

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: mode ? '#d9338a' : '#ddd',
          },
          algorithm: mode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <ModeSwitcher />
        <DatePicker />
        <Suspense fallback={<>...</>}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
