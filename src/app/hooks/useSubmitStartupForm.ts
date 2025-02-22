"use client";
import { useState } from "react";
import { StartupFormData } from "../../../type/type";


export function useSubmitStartupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitStartupForm = async (formData: StartupFormData) => {
    setLoading(true);
    setError(null);

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        const value = formData[key as keyof StartupFormData];

        // Check for 'projectPresentation' and handle FileList
        if (key === "projectPresentation" && value instanceof FileList) {
          if (value.length > 0) {
            data.append(key, value[0]); // Only take the first file
          }
        } 
        // Check for boolean values and convert to string
        else if (typeof value === "boolean") {
          data.append(key, value ? "true" : "false"); // Explicitly convert boolean to string
        } 
        // Check for string values
        else if (typeof value === "string" && value !== null) {
          data.append(key, value);
        }
      });

      const response = await fetch("http://localhost:4000/startup", {
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

  return { submitStartupForm, loading, error, submitted };
}