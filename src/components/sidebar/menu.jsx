import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";
import classNames from "classnames";

function Menu() {
  return (
    <nav className="mt-0.5  mb-1">
      <NavLink to={"/"} className="block">
        {({ isActive }) => (
          <div
            className={classNames(
              "inline-flex rounded-full p-3 transition-colors gap-5 items-center hover:bg-hover",
              { "font-bold": isActive }
            )}
          >
            <Icon name={isActive ? "homeActive" : "home"} />
            <div className="text-xl pr-4">Home</div>
          </div>
        )}
      </NavLink>
      <NavLink to={"/explore"} className="block">
        {({ isActive }) => (
          <div
            className={classNames(
              "inline-flex rounded-full p-3 transition-colors gap-5 items-center hover:bg-hover",
              { "font-bold": isActive }
            )}
          >
            <Icon name={isActive ? "searchActive" : "search"} />
            <div className="text-xl pr-4">Explore</div>
          </div>
        )}
      </NavLink>
    </nav>
  );
}

export default Menu;
