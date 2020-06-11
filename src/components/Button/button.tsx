import classNames from 'classnames';
import React, { FC } from 'react';

export enum ButtonSize {
  Large = 'large',
  Small = 'small',
  Mini = 'mini'
}
export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Warn = 'warn',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

export const Button: FC<BaseButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
};

export default Button;
