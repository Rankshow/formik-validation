import * as yup from "yup";

// Regex values of password
const passwordRules = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// setting up the schema
export const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(5).matches(passwordRules, {massage: "Please enter valid password"}).required(),
  age: yup.number().required()
})