import { useState } from "react";
import { HelpFormData } from "../../../type/type";

export function useSubmitHelpForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);
  
    const submitHelpForm = async (formData: HelpFormData) => {
        setLoading(true);
        setError(null);
      
        try {
          const data = new FormData();
      
          // Handle 'tellUsHelp' as a string
          if (formData.tellUsHelp) {
            data.append("tellUsHelp", formData.tellUsHelp);
          }
      
          // Handle 'additionalMedia' as FileList (optional)
          if (formData.additionalHelpMedia && formData.additionalHelpMedia instanceof FileList) {
            if (formData.additionalHelpMedia.length > 0) {
              data.append("additionalHelpMedia", formData.additionalHelpMedia[0]); // Only append the first file
            }
          }
      
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/help`, {
            method: "POST",
            body: data,
          });
      
          if (!response.ok) {
            throw new Error("Failed to submit form");
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
  
    return { submitHelpForm, loading, error, submitted };
  }