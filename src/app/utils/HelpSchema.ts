import * as yup from "yup";
export const helpSchema = yup.object({
    tellUsHelp: yup.string().required("This field is required"),
    additionalHelpMedia: yup.mixed<FileList>().notRequired(),
});