import React, { useCallback } from "react";

// CSS Classes
const BUTTON_BASE = "px-4 py-2 rounded transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
const BUTTON_PRIMARY = "bg-primary text-white hover:opacity-90 active:scale-95 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
const BUTTON_SECONDARY = "bg-gray-200 text-gray-800 hover:bg-gray-300 active:scale-95 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed";
const BUTTON_DANGER = "bg-red-600 text-white hover:bg-red-700 active:scale-95 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed";

const VARIANTS = {
  primary: BUTTON_PRIMARY,
  secondary: BUTTON_SECONDARY,
  danger: BUTTON_DANGER,
};

const SIZES = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = React.memo(
  ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    type = "button",
    disabled = false,
    fullWidth = false,
    className = "",
    ...props
  }) => {
    const handleClick = useCallback(() => {
      onClick?.();
    }, [onClick]);

    const buttonClass = `${BUTTON_BASE} ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""} ${className}`;

    return (
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={buttonClass}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;