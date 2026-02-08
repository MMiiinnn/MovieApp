import { forwardRef } from "react";

const Input = forwardRef(({ 
  id, 
  label, 
  className = "", 
  containerClassName = "",
  error,
  ...props 
}, ref) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className="text-zinc-400 text-sm font-medium ml-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 placeholder:text-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed ${className} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-xs ml-1">{error}</span>
      )}
    </div>
  );
});



export default Input;
