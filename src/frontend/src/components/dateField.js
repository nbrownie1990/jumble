import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateField({
  placeholder,
  value,
  onChange,
  name,
  readOnly,
}) {
  return (
    <React.Fragment>
      <input
        type="date"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dateformat="dd/MM/yyyy"
        name={name}
        disabled={readOnly}
      />
    </React.Fragment>
  )
}