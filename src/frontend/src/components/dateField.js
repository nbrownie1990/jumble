import React from 'react'
//import 'react-datepicker/dist/react-datepicker.css'

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
        //type="date"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={readOnly}
      />
    </React.Fragment>
  )
}
