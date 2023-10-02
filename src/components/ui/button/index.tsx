import classNames from 'classnames';
import { CSSProperties } from 'react';
import './styles.scss';

interface ButtonProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

function Button({ title, className, style }: ButtonProps) {
  return (
    <button
      className={classNames(
        'button text-[#B80E05] text-5xl py-8 px-14 font-bold',
        className
      )}
      style={style}
    >
      {title}
    </button>
  );
}

export default Button;
