import { CSSProperties } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface SpinnerProps {
  className?: string;
  color?: string;
  isSpining?: boolean;
  size?: number | string;
  enableTheme?: boolean;
  style: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
  // const { className, color, isSpining, size, enableTheme, style } = props;
  return <div>Spinner</div>;
};

Spinner.defaultProps = {
  indicator: CgSpinner,
  isSpining: true,
  size: 20,
  enableTheme: true,
};

export default Spinner;
