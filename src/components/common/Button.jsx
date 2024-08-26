import classNames from "classnames";

function Button({ children, size = "normal" }) {
  return (
    <button
      className={classNames(
        "rounded-full flex items-center justify-center font-bold bg-[#1d9bf0] hover:bg-[#1a8cd8] transition-colors",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
