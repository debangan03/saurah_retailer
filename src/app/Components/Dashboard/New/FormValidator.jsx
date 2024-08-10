import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const cibiluserSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  phone: Yup.string().min(10).max(10)
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Phone number is required'),
  email: Yup.string().email().required("Please enter your email"),
  pan: Yup.string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN number format")
    .required("PAN number is required"),

});
