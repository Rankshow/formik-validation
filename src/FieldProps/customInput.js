import { useField } from 'formik';
import React from 'react'

const CustomInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  console.log("meta", meta)
  console.log("field", field)
  return (
    <>
    <label>{label}</label>
     <input {...field} {...props}
      className={meta.touched && meta.error ? "input-error" : ""}
     />
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default CustomInput;