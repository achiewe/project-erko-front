"use client";
import CreativityTxtDiv from "@/app/shared/CreativityTxtDiv";
import { helpSchema } from "@/app/utils/HelpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function HelpContainer() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(helpSchema),
  });

  const onSubmit = (data: object) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div
      className="flex flex-row items-start sm:justify-center justify-start w-full h-full gap-y-10 flex-wrap bg-[#FFFFF0]
        border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      {submitted ? (
        <div className="text-green-600 text-lg font-semibold text-center flex justify-center items-center h-full w-full">
          ✅ Form submitted successfully! Redirecting...
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-[15px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full px-4 gap-4"
          >
            {/* Tell us about */}
            <div>
              <label className="block font-medium">
                Tell us what you need help with!
              </label>
              <textarea
                {...register("NeedHelp")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md"
              ></textarea>
              <p className="text-red-500 text-sm">{errors.NeedHelp?.message}</p>
            </div>
            {/* Additional media (optional) */}
            <div>
              <label className="block font-medium">
                Additional Media (Optional)
              </label>
              <input
                type="file"
                {...register("AdditionalMedia")}
                className="w-full"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <CreativityTxtDiv text="Thanks for your patience! We’ll get back to you ASAP." />
    </div>
  );
}
