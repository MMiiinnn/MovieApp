function Input({ id, label, className, ...props }) {
  let classes = `py-2 px-4 border border-gray-500 w-full ${className}`;

  if (id === "search") {
    classes += " rounded-full bg-gray-600";
  } else {
    classes += " rounded-lg";
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={classes} {...props} />
    </div>
  );
}

export default Input;
