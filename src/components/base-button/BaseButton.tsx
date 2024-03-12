import { BaseButtonType } from "../../types/components";

const BaseButton = ({ children, className, btnType }: BaseButtonType) => {
  const buttonType = {
    primary: "bg-secondary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <button
      className={`${className} ${buttonType[btnType]} rounded-md py-1.5 px-3 w-full hover:opacity-85`}
    >
      {children}
    </button>
  );
};

export default BaseButton;
