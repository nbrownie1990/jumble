import React from 'react'

export default function Select({
  placeholder,
  value,
  onChange,
  name,
  readOnly,
}) {
  return (
    <React.Fragment>
      <select
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dateformat="dd/MM/yyyy"
        disabled={readOnly}
      >
        <option>
          {' '}
          upcycling
          {/* {options.map(option => {
          ;<option key={option._id} value={option._id}>
            {option.name}
          </option>
        })} */}
        </option>
        <option>Flohmarkt</option>

        <option>FoodSharing</option>
      </select>
    </React.Fragment>
  )
}
