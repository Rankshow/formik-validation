import * as yup from "yup";

// setting up the schema
export const advancedSchema = yup.object().shape({
  username: yup
  .string()
  .min(6, "Username must be at least 6 character long")
  .max(8, "Username must not be above  character ong")
  .required("Required"),
  jobType: yup
  .string()
  .oneOf(["designer", "developer", "manager", "other"])
  .required("Required"),
  acceptedTos: yup
  .boolean()
  .oneOf([true], "Please accept the terms of service")
})











// Regular expression
// min 5 character, 1 uppercase letter, 1 lowercase letter, 1 numeric digits;
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// // setting up the schema
// export const schema = yup.object().shape({
//   email: yup.string().email("Please enter a valid email").required(),
//   password: yup.string().min(6).matches(passwordRules, {massage: "Please enter valid password"}).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match"),
//   age: yup.number().positive().integer().required("Required"),
// })