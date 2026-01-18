const Icon = ({ name, className = "" }) => {
  return (
    <span className={`material-symbols-outlined ${className} select-none`}>
      {name}
    </span>
  );
};

export default Icon;
