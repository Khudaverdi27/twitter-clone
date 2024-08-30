import classNames from "classnames";

function Button({
  children,
  size = "normal",
  variant = "primary",
  outline = false,
  ...props
}) {
  return (
    <button
      className={classNames(
        "rounded-full flex items-center justify-center   transition-colors",
        {
          "px-4 h-8": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
          "bg-[#1d9bf0] hover:bg-[#1a8cd8] font-bold": variant === "primary",
          "bg-[#fff] text-black font-semibold": variant === "white",
          "hover:text-red-500 hover:border-[#67070F] hover:bg-red-600/10 bg-black text-white border border-gray-500":
            outline,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
