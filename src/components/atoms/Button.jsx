import Icon from "./Icon";

function Button({
  children,
  variant = "primary",
  icon,
  fullWidth = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#00874F] text-white hover:bg-[#007041] px-5 py-2",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 px-5 py-2",
    outline: "border-2 border-gray-100/80 text-white hover:bg-white/10 px-5 py-2",
    ghost: "bg-transparent text-white hover:bg-white/5 px-5 py-2",
    icon: "bg-transparent text-white hover:text-green-500 p-2", // Icon variant
    link: "bg-transparent text-green-500 hover:text-green-400 p-0", // Link style
  };

  const widthStyle = fullWidth ? "w-full" : "w-fit";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} className="text-xl" />} {children}
    </button>
  );
}

export default Button;
