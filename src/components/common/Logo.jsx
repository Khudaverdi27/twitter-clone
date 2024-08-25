import { Link } from "react-router-dom";
import Icon from "./Icon";

function Logo() {
  return (
    <div className="py-0.5 ">
      <Link
        to={"/"}
        className="size-[52px] rounded-full flex  justify-center items-center hover:bg-hover transition-colors pr-2"
      >
        <Icon name="logo" />
      </Link>
    </div>
  );
}

export default Logo;
