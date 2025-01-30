// import { FC } from "react";
// import {
//   FieldValues,
//   UseFormRegister,
//   FieldError,
//   UseFormSetValue,
//   UseFormWatch,
// } from "react-hook-form";

// interface RadioGroupProps {
//   label: string;
//   name: string;
//   options: { value: string; label: string }[];
//   register: UseFormRegister<FieldValues>;
//   setValue: UseFormSetValue<FieldValues>;
//   watch: UseFormWatch<FieldValues>;
//   errors: FieldError | undefined;
// }

// const FormRadio: FC<RadioGroupProps> = ({
//   label,
//   name,
//   options,
//   register,
//   setValue,
//   watch,
//   errors,
// }) => {
//   return (
//     <div>
//       <label className="block font-medium">{label}</label>
//       <div className="flex items-center space-x-4">
//         {options.map((option) => (
//           <label key={option.value} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               value={option.value}
//               {...register(name)}
//               className="hidden"
//               onChange={() => setValue(name, option.value)}
//             />
//             <span
//               className={`w-6 h-6 border border-gray-400 flex items-center justify-center ${
//                 watch(name) === option.value ? "bg-gray-900 text-white" : ""
//               }`}
//             >
//               {watch(name) === option.value ? "X" : ""}
//             </span>
//             <span>{option.label}</span>
//           </label>
//         ))}
//       </div>
//       <p className="text-red-500 text-sm">{errors?.message}</p>
//     </div>
//   );
// };

// export default FormRadio;
