import React from 'react'

export default function TextField({
  type,
  placeholder,
  value,
  onChange,
  name,
  title,
  readOnly = false,
  disabled = false,
  autocomplete = 'on',
  ...props
}) {
  return (
    <React.Fragment>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        autocomplete={autocomplete}
      />
    </React.Fragment>
  )
}
