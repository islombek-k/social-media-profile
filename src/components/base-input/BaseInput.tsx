import { Controller } from "react-hook-form";
import { BaseInputType } from "../../types/components";

const BaseInput = ({
  label,
  placeholder,
  control,
  name,
  errors,
}: BaseInputType) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="input" className="text-primary font-medium mb-2">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder={placeholder}
            className="bg-inputBg border border-inputBorder rounded-md p-2"
          />
        )}
      />
      {errors[name] ? (
        <p className="text-red-500/70 mt-2">{errors[name]?.message}</p>
      ) : null}
    </div>
  );
};

export default BaseInput;
