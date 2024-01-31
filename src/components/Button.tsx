import { FC, HTMLProps } from "react";

type IButtonProps = {
  htmlType?: "button" | "submit";
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

const Button: FC<IButtonProps> = (props) => {
  const { children, htmlType = "button" } = props;

  return (
    <button
      type={htmlType}
      style={{
        boxShadow: "0px 4px 12px 0px #3751FF3D",
      }}
      className="!ring-none border-transparent h-10 gap-x-2 hover:bg-blue-600 rounded-lg px-6 text-sm bg-[#3751FF] text-slate-50 us-visible:ring-2 focus-visible:ring-blue-300 relative flex flex-shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border text-center font-normal leading-none duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
