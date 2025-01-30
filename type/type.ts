interface userFormData {
    name: string;
    email: string;
    phone?: string;
    telegram?: string;
    instagram?: string;
    about: string;
    resonate: "yes" | "no";
    resume: File | null;
    additionalMedia?: File | null;
    privacy: boolean;
};


export default userFormData;