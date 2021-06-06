import * as React from 'react';
import {Button as PrimeButton} from 'primereact/button';
import {ProgressSpinner} from 'primereact/progressspinner';
import styles from './Button.module.scss';

interface Props {
  label?: string;
  loading?: boolean;
  onClick?(e: any): void;
  big?: boolean;
  icon?: string;
  className?: string;
  disabled?: boolean;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  fullWidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({
  label,
  loading,
  onClick,
  disabled,
  big,
  fullWidth,
  icon,
  iconPos,
  className,
  type,
  ...props
}): JSX.Element => {
  const _onClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <PrimeButton
      className={`kb-btn ${styles.btn} ${big ? 'p-button-lg' : ''} ${className} ${
        fullWidth ? 'full-width' : ''
      }`}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      label={label}
      style={loading ? {color: 'transparent'} : undefined}
      type={type}
      onClick={_onClick}
    >
      {loading ? <ProgressSpinner className={styles.btnSpinner} strokeWidth="4" /> : null}
    </PrimeButton>
  );
};

export default Button;
