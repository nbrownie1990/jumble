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
  autoComplete = 'on',
  ...props
}) {
  return (
    <React.Fragment {...props}>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        //autoComplete={autoComplete}
      />
    </React.Fragment>
  )
}
