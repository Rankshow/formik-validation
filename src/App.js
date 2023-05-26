import './App.css';
import { useFormik } from 'formik';
import { schema } from './Schema/indeSchema';

const onSubmit = async(values, actions) => {
  console.log(actions);
  console.log(values);
  await new Promise((resolved) => setTimeout(resolved, 1000));
  actions.resetForm()
}
// initial values of the form field
const App = () => {
 const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: {
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
  },
  validationSchema: schema,
  onSubmit,
 })

 console.log(isSubmitting);


  return (
    <div className='App'>
    <div className='container'>
      <h1 onSubmit={handleSubmit}>Form Validation</h1>
        <form>
           <input 
            value={values.email}
            onChange={handleChange} 
            onBlur={handleBlur} 
           type="email" name='email' placeholder='Enter your email'className={errors.email && touched.email ? "input-error" : ""}/><br/>
           {errors.email && touched.email && <p className='error'>{errors.email}</p>}
          <input 
           value={values.password}
          onChange={handleChange}
          onBlur={handleBlur} 
          type="password" name="password" placeholder='Enter your password' className={errors.password && touched.password ? "input-error" : ""} /><br/>
          {errors.password && touched.password && <p className='error'>{errors.password}</p>}
          <input  
           value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur} 
          type="password" name="confirmPassword" placeholder='Enter your confirm password' className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} /><br/>
          {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
          <input 
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur} 
          type="number" name='age' placeholder='Enter your age' className={errors.age && touched.age ? "input-error" : ""}/> <br></br>
          {errors.age && touched.age && <p className='error'>{errors.age}</p>}
          <button disabled={isSubmitting} type='submit'>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
