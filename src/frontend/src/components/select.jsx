import React, {useState} from 'react'
import {getCategoryById} from "../services/apiService";

export default function Select({
  placeholder,
  value,
  onChange,
  name,
  readOnly,
}){
const [categories, setCategories] = useState([]);


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
          <options>
        {/*{categories.map(category => {*/}
        {/*  <option key={category.id} value={category.name}>*/}
        {/*    Category: {category.name} </option>*/}
        {/*}*/}
        {/*)}*/}
          </options>

      </select>
    </React.Fragment>
  )
}
