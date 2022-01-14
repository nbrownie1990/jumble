import React from 'react'

export default function SelectField({
  title,
  onChange,
  name,
  value,
  selected,
  readOnly,
  categories,
  ...props
}){
  return (
    <label {...props}>
        {title}
      <select className="form-select"
        name={name}
        value={value}
        onChange={onChange}
        disabled={readOnly}
      >
        {categories.map(category => (
          <option key={category.categoryId} value={category.categoryName}>
             {category.categoryName}
          </option>
        ))}

      </select>
    </label>
  )
}
