import classNames from "classnames";

function Button({ children, size = "normal", variant = "primary", ...props }) {
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
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
