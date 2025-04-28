import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\+?\d{10,15}$/, "Invalid phone number").notRequired(),
  telegram: yup.string().matches(/^(https:\/\/t\.me\/[A-Za-z0-9_]+(?:\/[A-Za-z0-9_]+)?(?:\?[\S]+)?)?$|^[A-Za-z0-9_]+$|^@[A-Za-z0-9_]+$/, "Invalid Telegram URL or Username").notRequired().nullable(),
  instagram: yup.string().matches(
    /^(https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_\.]+(?:\/[A-Za-z0-9_\-\.\?]+)*(\?[\S]*)?)?$|^[A-Za-z0-9_\.]+$|^@[A-Za-z0-9_\.]+$/,
    "Invalid Instagram URL or Username"
  ).notRequired().nullable(),
  about: yup.string().required("Tell us about yourself is required"),
  resonate: yup.string().oneOf(["yes", "no"], "You must select an option").required(),
  resume: yup.mixed<FileList>().required("Resume is required"),
  additionalMedia: yup.mixed<FileList>().notRequired(),
  privacy: yup.boolean().oneOf([true], "You must accept the privacy policy").required(),
});
