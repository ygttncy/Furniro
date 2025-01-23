import PropTypes from "prop-types"

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  options,
  error,
}) => {
  const handleChange = (e) => {
    const { value } = e.target
    onChange(id, value)
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select
          id={id}
          value={value || ""}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value || ""}
          onChange={handleChange}
          placeholder={placeholder}
          className="input-field"
          autoComplete="off"
        />
      )}
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
}

export default InputField
