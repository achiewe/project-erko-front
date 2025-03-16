import { useState } from "react";
import { FormDataType } from "../../../type/type";



export function useSubmitForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitForm = async (formData: FormDataType) => {
    setLoading(true);
    setError(null);
  
    try {
      const data = new FormData();
  
      Object.keys(formData).forEach((key) => {
        const value = formData[key];
  
        if (key === "resume" || key === "additionalMedia") {
          if (value instanceof FileList && value.length > 0) {
            data.append(key, value[0]);
          }
        } else if (typeof value === "boolean") {
          data.append(key, value.toString()); // Convert boolean to string
        } else if (typeof value === "string") {
          data.append(key, value);
        }
      });
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
        method: "POST",
        body: data,
      });
  
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
  
      setSubmitted(true);
      return await response.json();
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  

  return { submitForm, loading, error, submitted };
}
