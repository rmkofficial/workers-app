const Button = (props) => {
  const buttonClasses = `p-2 text-lg bg-teal-700 text-white ${props.className}`;
  const textClasses = "hover:text-xl";

  return (
    <button type={props.type || "button"} className={buttonClasses}>
      <span className={textClasses}>{props.children}</span>
    </button>
  );
};

export default Button;
