import * as yup from "yup";
export interface FormDataType {
    name: string;
    email: string;
    phone?: string | null;
    telegram?: string | null;
    instagram?: string | null;
    about: string;
    resonate: "yes" | "no";
    resume: FileList;
    additionalMedia?: FileList | null;
    privacy: boolean;
    [key: string]: string | FileList | null | boolean | undefined;
  };
  
  
export interface StartupFormData{
  fullName: string;
  email: string;
  phone: string;
  country: string;
  aboutYourStartup: string;
  whyYou: string;
  projectPresentation?: yup.Maybe<FileList | undefined>;
}

