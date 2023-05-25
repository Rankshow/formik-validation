import './App.css';
import { useFormik } from 'formik';
import { schema } from './Schema/indeSchema';

const onSubmit = () => {
  console.log("Submitted")
}
// initial values of the form field
const App = () => {
 const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: {
    email: "",
    password: "",
    age: "",
  },
  validationSchema: schema,
  onSubmit,
 })

//  console.log(formik);

  return (
    <div className='App'>
    <div className='container'>
      <h1 onSubmit={handleSubmit}>form Validation</h1>
        <form>
           <input 
            value={values.email}
            onChange={handleChange} 
            onBlur={handleBlur} 
           type="email" name='email' placeholder='Enter your email'className={errors.email ? "input-error" : ""}/><br/>
           {errors.email}
          <input 
           value={values.password}
          onChange={handleChange}
          onBlur={handleBlur} 
          type="password" name="password" placeholder='Enter your password' /><br/>
          
          <input 
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur} 
          type="number" name='age' placeholder='Enter your age' /> <br></br>
          <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
