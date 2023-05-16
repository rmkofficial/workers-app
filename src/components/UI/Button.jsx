const Button = (props) => {
  const buttonClasses = `p-2 text-lg bg-teal-700 text-white ${props.className}`;

  return (
    <button type={props.type || "button"} className={buttonClasses}>
      {props.children}
    </button>
  );
};

export default Button;
