const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`font-body text-[10px] lg:text-xs font-bold px-2 py-1 rounded-md bg-black/60 text-white backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
