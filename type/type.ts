interface FormDataType {
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
  
  


export default FormDataType;