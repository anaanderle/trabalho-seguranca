import "./button.css";

export function Button({
  children,
  color,
  handleClick,
  sizeType,
  type,
  extraClasses,
}) {
  return (
    <button
      className={`button color${color} ${sizeType} ${extraClasses}`}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  extraClasses: "",
  type: "",
  color: "",
  sizeType: "",
};
