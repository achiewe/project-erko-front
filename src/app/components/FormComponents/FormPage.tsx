"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/app/utils/validationSchema";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { useRouter } from 'next/navigation';
import * as yup from "yup";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  const { submitForm, submitted, error, loading } = useSubmitForm();
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const jobsTitle = searchParams.get('jobsTitle');

  const onSubmit = async (data: yup.InferType<typeof userSchema>) => {
    const result = await submitForm(data);
    if (result) {
      setTimeout(() => {
        router.push("/jobs");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col w-full h-full lg:overflow-y-auto lg:h-[563px] lg:justify-start lg:w-[960px]">
      <p className="text-red-500">{error}</p>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-full px-[15px] gap-[15px]"
        >
          <div>
            <label className="block font-medium lg:text-[20px]">Name</label>
            <input
              {...register("name")}
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md lg:text-[20px]"
            />
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium lg:text-[20px]">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md lg:text-[20px]"
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
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md lg:text-[20px]"
            />
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.phone?.message}
            </p>
          </div>

          {/* Telegram */}
          <div>
            <label className="block font-medium lg:text-[20px]">Telegram</label>
            <input
              {...register("telegram")}
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md lg:text-[20px]"
            />
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.telegram?.message}
            </p>
          </div>

          {/* Instagram */}
          <div>
            <label className="block font-medium lg:text-[20px]">
              Instagram
            </label>
            <input
              {...register("instagram")}
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md lg:text-[20px]"
            />
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.instagram?.message}
            </p>
          </div>

          {/* Tell us about yourself */}
          <div>
            <label className="block font-medium lg:text-[20px]">
              Tell us about yourself
            </label>
            <textarea
              {...register("about")}
              className="w-full pl-[10px] border-[1px] border-black outline-none h-[80px] rounded-md lg:text-[20px]"
            ></textarea>
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.about?.message}
            </p>
          </div>

          {/* Resonate with Erkös Aesthetics */}
          <div>
            <label className="block font-medium lg:text-[20px]">
              Do you resonate with Erkos aesthetics?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="yes"
                  {...register("resonate")}
                  className="hidden"
                  onChange={() => setValue("resonate", "yes")}
                />
                <span
                  className={`w-6 h-6 border border-gray-400 flex items-center justify-center ${
                    watch("resonate") === "yes" ? "bg-gray-900 text-white" : ""
                  }`}
                >
                  {watch("resonate") === "yes" ? "X" : ""}
                </span>
                <span className="lg:text-[20px]">Yes</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  {...register("resonate")}
                  className="hidden"
                  onChange={() => setValue("resonate", "no")}
                />
                <span
                  className={`w-6 h-6 border border-gray-400 flex items-center justify-center ${
                    watch("resonate") === "no" ? "bg-gray-900 text-white" : ""
                  }`}
                >
                  {watch("resonate") === "no" ? "X" : ""}
                </span>
                <span className="lg:text-[20px]">No</span>
              </label>
            </div>
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.resonate?.message}
            </p>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-medium lg:text-[20px]">
              Upload Resume
            </label>
            <input
              type="file"
              {...register("resume")}
              className="input lg:text-[20px]"
            />
            <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.resume?.message}
            </p>
          </div>

          {/* Additional Media (Optional) */}
          <div>
            <label className="block font-medium lg:text-[20px]">
              Additional Media (Optional)
            </label>
            <input
              type="file"
              {...register("additionalMedia")}
              className="input lg:text-[20px]"
            />
               <p className="text-red-500 text-sm lg:text-[20px]">
              {errors.additionalMedia?.message}
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-baseline flex-row space-x-2">
            <input type="checkbox" {...register("privacy")} />
            <label className="lg:text-[20px]">
              I have read and accept the privacy policy
            </label>
          </div>
          <p className="text-red-500 text-sm lg:text-[20px]">
            {errors.privacy?.message}
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // Disable button during loading
            className={`bg-blue-600 text-white px-4 py-2 rounded-md lg:text-[20px] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
