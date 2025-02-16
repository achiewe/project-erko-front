import { FieldError, UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function FormField({
  label,
  name,
  type = "text",
  register,
  error,
}: FormFieldProps) {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      <input
        {...register(name)}
        type={type}
        className="w-full pl-2 border border-black outline-none h-10 rounded-md"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
