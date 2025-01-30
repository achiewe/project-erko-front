import { FC } from "react";
import { FieldValues, UseFormRegister, FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldError | undefined;
}

const FormInput: FC<InputFieldProps> = ({
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      <input type={type} {...register(name)} className="input" />
      <p className="text-red-500 text-sm">{errors?.message}</p>
    </div>
  );
};

export default FormInput;
