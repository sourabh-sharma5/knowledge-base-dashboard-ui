import React, { useCallback } from "react";

const INPUT_CLASSES = "w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all";

const Input = React.memo(
  ({ 
    value = "", 
    onChange, 
    placeholder = "Search...", 
    width = "w-full",
    type = "text",
    disabled = false,
    required = false,
    ...props 
  }) => {
    const handleChange = useCallback(
      (e) => {
        onChange?.(e.target.value);
      },
      [onChange]
    );

    return (
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`${INPUT_CLASSES} ${width} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;