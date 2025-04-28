"use client";
import { formSchema } from "@/app/utils/consultingSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import InfoBanner from "./InfoBanner";
import InfoModal from "@/app/shared/InfoModal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/features/store";
import { useSubmitStartupForm } from "@/app/hooks/useSubmitStartupForm";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import useOverflowControl from "@/app/hooks/useOverflowControl";

export default function StartupFormContainer() {
  const { submitStartupForm, submitted, loading, error } =
    useSubmitStartupForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const openModal = useSelector(
    (store: RootState) => store.openModal.openModal
  );

  useOverflowControl(openModal);

  const router = useRouter();
  const onSubmit = async (data: yup.InferType<typeof formSchema>) => {
    const result = await submitStartupForm(data);
    if (result) {
      setTimeout(() => {
        router.push("/jobs");
      }, 3000);
    }
  };
  return (
    <div
      className="flex flex-row items-start sm:justify-center justify-start w-full 
      h-full h-mn:gap-y-[0px] h-sm:gap-y-[10px] h-mm:pt-[0px] gap-y-[40px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
      border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative lg:overflow-y-auto lg:h-[605px]"
    >
      <InfoModal
        txt1="ERKO supports bold, creative minds and life-changing startups striving to make the world a better place."
        txt2="Keep sharing your bright ideas with us digitally. If we see the spark we’re looking for, we’ll back your vision and help bring it to life."
      />
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
          <InfoBanner />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full px-4 gap-4"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Full Name
              </label>
              <input
                {...register("fullName")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.fullName?.message}
              </p>
            </div>
            {/* Email */}
            <div>
              <label className="block font-medium lg:text-[20px]">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.email?.message}
              </p>
            </div>
            {/* Phone */}
            <div>
              <label className="block font-medium lg:text-[20px]">Phone</label>
              <input
                {...register("phone")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.phone?.message}
              </p>
            </div>
            {/* Country */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Country
              </label>
              <input
                {...register("country")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.country?.message}
              </p>
            </div>
            {/* About Your Startup */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                About Your Startup
              </label>
              <textarea
                {...register("aboutYourStartup")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              ></textarea>
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.aboutYourStartup?.message}
              </p>
            </div>
            {/* Why You? */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Why You?
              </label>
              <textarea
                {...register("whyYou")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              ></textarea>
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.whyYou?.message}
              </p>
            </div>
            {/* Project Presentation (Optional) */}
            <div>
              <label className="block font-medium lg:text-[20px]">
                Project Presentation (Optional)
              </label>
              <input
                type="file"
                {...register("projectPresentation")}
                className="w-full lg:text-[20px]"
                disabled={openModal || loading} // Disable during loading
              />
              <p className="text-red-500 text-sm lg:text-[20px]">
                {errors.projectPresentation?.message}
              </p>
            </div>
            <button
              type="submit"
              className={`bg-blue-600 text-white px-4 py-2 rounded-md lg:text-[20px] ${
                openModal || loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={openModal || loading} // Disable while loading
            >
              {loading ? "Submitting..." : "Submit Information"}
            </button>
            {error && (
              <p className="text-red-500 text-sm lg:text-[20px]">{error}</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
