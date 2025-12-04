import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200",
    secondary: "bg-white text-indigo-900 hover:bg-slate-50 border border-slate-200 shadow-sm",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-200"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};