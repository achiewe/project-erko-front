"use client";
import { useSubmitHelpForm } from "@/app/hooks/useSubmitHelpForm";
import CreativityTxtDiv from "@/app/shared/CreativityTxtDiv";
import { helpSchema } from "@/app/utils/HelpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function HelpContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(helpSchema),
  });

  const router = useRouter();
  const { submitHelpForm, loading, error, submitted } = useSubmitHelpForm();

  const onSubmit = async (data: yup.InferType<typeof helpSchema>) => {
    const result = await submitHelpForm(data);
    if (result) {
      setTimeout(() => {
        router.push("/erko");
      }, 3000);
    }
  };

return (
    <div
      className="flex flex-row items-start sm:justify-center justify-start w-full h-full gap-y-10 flex-wrap bg-[#FFFFF0]
        border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative lg:h-[605px]"
    >
      {submitted ? (
        <div className="text-green-600 text-lg font-semibold text-center flex justify-center items-center h-full w-full">
          ✅ Form submitted successfully! Redirecting...
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold">Submitting...</p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-[15px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full px-4 gap-4 mb-10 lg:mb-20"
          >
            {/* Tell us Help */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Tell us what you need help with!
              </label>
              <textarea
                {...register("tellUsHelp")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md lg:text-[20px]"
                disabled={loading} // Disable during loading
              ></textarea>
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.tellUsHelp?.message}
              </p>
            </div>
            {/* Additional help media (optional) */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Additional Media (Optional)
              </label>
              <input
                type="file"
                {...register("additionalHelpMedia")}
                className="w-full lg:text-[20px] lg:mb-3"
                disabled={loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.additionalHelpMedia?.message} 
            </p>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 bg-blue-500 text-white rounded-md lg:text-[20px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
          <CreativityTxtDiv text="Thanks for your patience! We’ll get back to you ASAP." />
        </div>
      )}
    </div>
  );
}