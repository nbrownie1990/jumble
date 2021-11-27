import React, {useEffect, useState} from 'react'

export default function Select({
  title,
  onChange,
  name,
  value,
  selected,
  readOnly,
  ...props
}){
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('/api/categories/getall')
        .then((res) => res.json())
        .then((data) => {
          setCategories(data)
          console.log(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <p className="container w-100 h-100 mt-5" >Data is loading...</p>;
  }

  if (error || !Array.isArray(categories)) {
    return <p className="container w-100 h-100 mt-5" >There was an error loading your data!</p>;
  }

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
