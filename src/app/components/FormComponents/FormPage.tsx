"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/app/utils/validationSchema";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";

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

  const { submitForm } = useSubmitForm();

  const onSubmit = async (data: object) => {
    const result = await submitForm(data);
    console.log(result);
  };

  // const onSubmit = (data: object) => {
  //   console.log(data);
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full px-[15px] gap-[15px]"
    >
      {/* Name */}
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register("name")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium">Phone</label>
        <input
          {...register("phone")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
      </div>

      {/* Telegram */}
      <div>
        <label className="block font-medium">Telegram</label>
        <input
          {...register("telegram")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.telegram?.message}</p>
      </div>

      {/* Instagram */}
      <div>
        <label className="block font-medium">Instagram</label>
        <input
          {...register("instagram")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[38px] rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.instagram?.message}</p>
      </div>

      {/* Tell us about yourself */}
      <div>
        <label className="block font-medium">Tell us about yourself</label>
        <textarea
          {...register("about")}
          className="w-full pl-[10px] border-[1px] border-black outline-none h-[80px] rounded-md"
        ></textarea>
        <p className="text-red-500 text-sm">{errors.about?.message}</p>
      </div>

      {/* Resonate with Erkös Aesthetics */}
      <div>
        <label className="block font-medium">
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
            <span>Yes</span>
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
            <span>No</span>
          </label>
        </div>
        <p className="text-red-500 text-sm">{errors.resonate?.message}</p>
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block font-medium">Upload Resume</label>
        <input type="file" {...register("resume")} className="input" />
        <p className="text-red-500 text-sm">{errors.resume?.message}</p>
      </div>

      {/* Additional Media (Optional) */}
      <div>
        <label className="block font-medium">Additional Media (Optional)</label>
        <input type="file" {...register("additionalMedia")} className="input" />
      </div>

      {/* Privacy Policy */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" {...register("privacy")} />
        <label>I have read and accept the privacy policy</label>
      </div>
      <p className="text-red-500 text-sm">{errors.privacy?.message}</p>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
