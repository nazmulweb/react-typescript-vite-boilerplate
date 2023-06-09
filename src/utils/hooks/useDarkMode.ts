import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app';
import { setMode } from '../../app/theme/themeSlice';
import { THEME_ENUM } from '../../constants/theme.constant';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const { MODE_LIGHT, MODE_DARK } = THEME_ENUM;

  const isEnabled = mode === MODE_DARK;

  const onModeChange = (modes: string) => dispatch(setMode(modes));

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove(isEnabled ? MODE_LIGHT : MODE_DARK);
    root.classList.add(isEnabled ? MODE_DARK : MODE_LIGHT);
  }, [MODE_DARK, MODE_LIGHT, isEnabled]);

  return [isEnabled, onModeChange] as const;
};

export default useDarkMode;
