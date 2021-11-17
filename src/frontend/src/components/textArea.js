import React from 'react'

export default function TextArea({
  value,
  onChange,
  name,
  rows,
  placeholder,
  readOnly,
}) {
  return (
    <React.Fragment>
      <textarea
        className="form-control rounded"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        name={name}
        disabled={readOnly}
      />
    </React.Fragment>
  )
}
