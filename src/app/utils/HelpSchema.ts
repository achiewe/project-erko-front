import * as yup from "yup";
export const helpSchema = yup.object({
    tellUsHelp: yup.string().required("This field is required"),
    additionalHelpMedia: yup.mixed<FileList>()
        .notRequired()
        .test("fileSize", "Additional media file is too large. Maximum size is 10MB.", (value) => {
          if (!value || value.length === 0) return true; // Pass if no file (not required)
          return value[0].size <= 10 * 1024 * 1024; // 10MB limit
        }),
});