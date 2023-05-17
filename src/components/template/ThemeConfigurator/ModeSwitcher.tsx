import React, { useCallback } from 'react';
import { Switch } from 'antd';
import useDarkMode from '../../../utils/hooks/useDarkMode';

const ModeSwitcher: React.FC = () => {
  const [, setIsDark] = useDarkMode();
  const onSwitchChange = useCallback(
    (checked: boolean) => {
      setIsDark(checked ? 'dark' : 'light');
    },
    [setIsDark]
  );

  return (
    <div>
      <Switch defaultChecked onChange={onSwitchChange} />
    </div>
  );
};

export default ModeSwitcher;
