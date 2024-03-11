type BaseTextAreaType = {
  cols: number;
  rows: number;
  label: string;
  placeholder: string;
};

const BaseTextArea = ({ cols, rows, label, placeholder }: BaseTextAreaType) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="textarea" className="text-primary font-medium mb-2">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        name="textarea"
        id="textarea"
        cols={cols}
        rows={rows}
        className="bg-inputBg border border-inputBorder rounded-md p-2"
      />
    </div>
  );
};

export default BaseTextArea;
