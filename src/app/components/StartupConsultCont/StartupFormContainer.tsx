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
  border-r-2 border-b-2 border-gray-800 drop-shadow-[0px_0px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <InfoModal
        txt1="ERKO supports bold, creative minds and life-changing startups striving to make the world a better place."
        txt2="Keep sharing your bright ideas with us digitally. If we see the spark we’re looking for, we’ll back your vision and help bring it to life."
      />{" "}
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
            {/* Full Name */}
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                {...register("fullName")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md"
                disabled={openModal}
              />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>
            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md"
                disabled={openModal}
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            {/* Phone */}
            <div>
              <label className="block font-medium">Phone</label>
              <input
                {...register("phone")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md"
                disabled={openModal}
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
            {/* Country */}
            <div>
              <label className="block font-medium">Country</label>
              <input
                {...register("country")}
                className="w-full pl-2 border border-black outline-none h-10 rounded-md"
                disabled={openModal}
              />
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>
            {/* About Your Startup */}
            <div>
              <label className="block font-medium">About Your Startup</label>
              <textarea
                {...register("aboutYourStartup")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md"
                disabled={openModal}
              ></textarea>
              <p className="text-red-500 text-sm">
                {errors.aboutYourStartup?.message}
              </p>
            </div>
            {/* Why You? */}
            <div>
              <label className="block font-medium">Why You?</label>
              <textarea
                {...register("whyYou")}
                className="w-full pl-2 border border-black outline-none h-20 rounded-md"
                disabled={openModal}
              ></textarea>
              <p className="text-red-500 text-sm">{errors.whyYou?.message}</p>
            </div>
            {/* Project Presentation (Optional) */}
            <div>
              <label className="block font-medium">
                Project Presentation (Optional)
              </label>
              <input
                type="file"
                {...register("projectPresentation")}
                className="w-full"
                disabled={openModal}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              disabled={openModal || loading} // Disable while loading
            >
              {loading ? "Submitting..." : "Submit Information"}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          </form>
        </div>
      )}
    </div>
  );
}
