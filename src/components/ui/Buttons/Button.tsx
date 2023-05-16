/* eslint-disable react/require-default-props */
import { CSSProperties, forwardRef, ReactNode } from 'react';
import { SizeType } from '../config-provider/SizeContext';
import ClassNames from 'classnames';

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

interface ButtonProps {
  active?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  shape?: ButtonShape;
  size?: SizeType;
  className?: string;
  children?: ReactNode;
  styles?: CSSProperties;
  disabled?: boolean;
  color: string;
  block: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    active,
    icon,
    loading,
    shape,
    size,
    className,
    children,
    styles,
    disabled,
    color,
    block,
  } = props;

  const defaultClasses = 'button';

  const classes = ClassNames(defaultClasses, block ? 'w-full' : '');

  const renderChildren = () => {
    if (loading && children) {
      return <span className="flex items-center justify-center"></span>;
    }
  };

  return (
    <button ref={ref} className={classes}>
      {active}
    </button>
  );
});

export default Button;

Button.defaultProps = {
  active: false,
  loading: false,
  shape: 'default',
  size: 'default',
  disabled: false,
};
