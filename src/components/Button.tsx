import clsx from "clsx";
import { FC, HTMLProps } from "react";

type IButtonProps = {
  type?: "primary" | "secondary" | "tertiary";
  variant?: "default" | "destructive";
  size?: "small" | "default";
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit";
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    size = "default",
    htmlType = "button",
    disabled = false,
    type = "primary",
    variant = "default",
    className,
    ...buttonProps
  } = props;

  return (
    <button
      type={htmlType}
      {...buttonProps}
      className={clsx(
        "!ring-none relative flex flex-shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border text-center font-normal leading-none duration-200",
        size === "small"
          ? "h-[25px] gap-x-1 rounded px-4 text-xs"
          : "h-10 gap-x-2 rounded-large px-6 text-sm",
        disabled &&
          "!cursor-not-allowed !border !border-zinc-300 !bg-zinc-100 !text-zinc-300",
        type === "primary" &&
          variant === "default" &&
          "border-transparent bg-brand text-slate-50 hover:bg-brand-500 focus-visible:border-brand-300 focus-visible:ring-2 focus-visible:ring-blue-300 active:bg-brand-700",
        type === "primary" &&
          variant === "destructive" &&
          "active:bg-error-red-600 border-transparent bg-error-red-500 text-slate-50 hover:bg-error-red-400 focus-visible:border-error-red-300 focus-visible:ring-2 focus-visible:ring-error-red-300",
        type === "secondary" &&
          variant === "default" &&
          "border-brand bg-white text-brand hover:bg-brand-50 focus-visible:ring-2 focus-visible:ring-blue-200 active:bg-brand-100",
        type === "secondary" &&
          variant === "destructive" &&
          "border-error-red-500 bg-white text-error-red-500 hover:bg-error-red-50 focus-visible:ring-2 focus-visible:ring-error-red-200 active:bg-error-red-100",
        type === "tertiary" &&
          variant === "default" &&
          "border-transparent bg-white text-zinc-600 hover:bg-brand-50 focus-visible:ring-2 focus-visible:ring-blue-200 active:bg-brand-100",
        type === "tertiary" &&
          variant === "destructive" &&
          "border-transparent bg-white text-error-red-500 hover:bg-error-red-50 focus-visible:ring-2 focus-visible:ring-error-red-200 active:bg-error-red-100",
        className
      )}
      disabled
    >
      {children}
    </button>
  );
};

export default Button;
