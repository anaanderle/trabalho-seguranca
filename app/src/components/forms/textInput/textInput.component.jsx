import "./textInput.css";

export function TextInput({
  label,
  name,
  type,
  value,
  error,
  placeholder,
  handleChange,
  extraClasses,
  disabled,
}) {
  return (
    <div className={`formInputContainer ${extraClasses}`}>
      <label>{label}</label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        autoComplete="off"
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <span className="error">{error}</span>
    </div>
  );
}
