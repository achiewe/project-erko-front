"use client";
import { formSchema } from "@/app/utils/consultingSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import FileUpload from "./FileUpload";
import InfoBanner from "./InfoBanner";

export default function StartupFormContainer() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };
  return (
    <div
      className="flex flex-row items-start sm:justify-center justify-start w-full 
  h-full h-mn:gap-y-[0px] h-sm:gap-y-[10px] h-mm:pt-[0px] gap-y-[40px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
  border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      {" "}
      {submitted ? (
        <div className="text-green-600 text-lg font-semibold text-center flex justify-center items-center h-full w-full">
          ✅ Form submitted successfully! Redirecting...
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-[15px]">
          <InfoBanner />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full px-4 gap-4"
          >
            <FormField
              label="Full Name"
              name="fullName"
              register={register}
              error={errors.fullName}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />
            <FormField
              label="Phone"
              name="phone"
              register={register}
              error={errors.phone}
            />
            <FormField
              label="Country"
              name="country"
              register={register}
              error={errors.country}
            />

            {/* Textarea Fields */}
            <div>
              <label className="block font-medium">About Your Startup</label>
              <textarea
                {...register("aboutYourStartup")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md"
              ></textarea>
              {errors.aboutYourStartup && (
                <p className="text-red-500 text-sm">
                  {errors.aboutYourStartup.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Why You?</label>
              <textarea
                {...register("whyYou")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md"
              ></textarea>
              {errors.whyYou && (
                <p className="text-red-500 text-sm">{errors.whyYou.message}</p>
              )}
            </div>

            {/* File Upload Fields */}
            <FileUpload
              label="Project Presentation (Optional)"
              name="projectPresentation"
              register={register}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Submit Information
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
