type BaseInputType = {
  label: string;
  placeholder: string;
};

const BaseInput = ({ label, placeholder }: BaseInputType) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="input" className="text-primary font-medium mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-inputBg border border-inputBorder rounded-md p-2"
      />
    </div>
  );
};

export default BaseInput;
