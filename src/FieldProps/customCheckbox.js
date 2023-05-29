import { useField } from 'formik';
import React from 'react';
import './checkbox.css'

const CustomCheckBox = ({label, ...props}) => {
  const [field, meta] = useField(props);
  
  
  return (
    <>
    <div className='checkbox'>
      <label>{label}</label>
      <input 
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span>I accepts the terms and condition</span>
     </div>
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default CustomCheckBox;