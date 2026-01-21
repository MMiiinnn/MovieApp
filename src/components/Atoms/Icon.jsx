const Icon = ({ name, className = "", type = "", iconAwesome }) => {
  const iconType = type === "awesome";

  return (
    <>
      {iconType ? (
        <i className={iconAwesome}></i>
      ) : (
        <span className={`material-symbols-outlined ${className} select-none`}>
          {name}
        </span>
      )}
    </>
  );
};

export default Icon;
