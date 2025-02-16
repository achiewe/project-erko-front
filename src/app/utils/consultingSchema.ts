import * as yup from "yup";

export const formSchema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Phone number is required"),
    country: yup.string().required("Country is required"),
    aboutYourStartup: yup.string().required("This field is required"),
    whyYou: yup.string().required("This field is required"),
    projectPresentation: yup.mixed().nullable(), // Optional file upload
  });
