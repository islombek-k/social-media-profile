import { Controller } from "react-hook-form";
import { BaseTextAreaType } from "../../types/components";

const BaseTextArea = ({
  cols,
  rows,
  label,
  placeholder,
  control,
  name,
  errors,
}: BaseTextAreaType) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="textarea" className="text-primary font-medium mb-2">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            placeholder={placeholder}
            id="textarea"
            cols={cols}
            rows={rows}
            className="bg-inputBg border border-inputBorder rounded-md p-2"
            {...field}
          />
        )}
      />
      {errors[name] ? (
        <p className="text-red-500/70 mt-2">{errors[name]?.message}</p>
      ) : null}
    </div>
  );
};

export default BaseTextArea;
