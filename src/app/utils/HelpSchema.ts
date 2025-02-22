import * as yup from "yup";
export const helpSchema = yup.object({
    NeedHelp: yup.string().required("This field is required"),
    AdditionalMedia: yup.mixed<FileList>().notRequired(),
});