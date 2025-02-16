import { FieldError, UseFormRegister } from "react-hook-form";

interface FileUploadProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function FileUpload({
  label,
  name,
  register,
  error,
}: FileUploadProps) {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      <input type="file" {...register(name)} className="w-full" />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
