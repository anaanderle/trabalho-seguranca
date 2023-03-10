import "./formContainer.css";

export function FormContainer({
  onSubmit,
  title,
  children,
  extraClasses,
  onClick,
}) {
  return (
    <form
      onSubmit={onSubmit}
      onClick={onClick}
      className={`formContainer ${extraClasses}`}
    >
      <h1>{title}</h1>
      {children}
    </form>
  );
}

FormContainer.defaultProps = {
  extraClasses: "",
};
