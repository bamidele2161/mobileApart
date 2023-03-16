import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is a required field"),
  password: yup.string().required("Password is a required field"),
});

export const userRegistrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  email: yup.string().email("Enter a valid email address").required(),
  phone: yup.string().required("Phone number is a required field"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("Password is a required field")
    .matches(/^(?=.*[A-Z])/, " Must contain an uppercase character")
    .matches(/^(?=.*[a-z])/, " Must contain a lowercase character")

    .matches(/^(?=.*[0-9])/, "  Must contain a number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "  Must contain a special case character"),
});
