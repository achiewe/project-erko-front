import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().matches(/^\+?\d{10,15}$/, "Invalid phone number"),
    telegram: yup
    .string()
    .matches(/^https:\/\/t\.me\/[A-Za-z0-9_]+$/, "Invalid Telegram URL")
    .notRequired(),
  instagram: yup
    .string()
    .matches(/^https:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_\.]+$/, "Invalid Instagram URL")
    .notRequired(),
    about: yup.string().required("Tell us about yourself is required"),
    resonate: yup.string().oneOf(["yes", "no"], "You must select an option"),
    resume: yup.mixed().required("Resume is required"),
    additionalMedia: yup.mixed().notRequired(),
    privacy: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});