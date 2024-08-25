import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";
import classNames from "classnames";

const menus = [
  { name: "Home", active: "homeActive", slug: "/" },
  { name: "Explore", active: "exploreActive", slug: "/explore" },
  { name: "Notifications", active: "notifyActive", slug: "/notifications" },
  { name: "Grok", active: "grokActive", slug: "/grok" },
  { name: "Profile", active: "profileActive", slug: "/profile" },
];

function Menu() {
  return (
    <nav className="mt-0.5  mb-1">
      {menus.map((m) => (
        <NavLink key={m.name} to={m.slug} className="block">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex rounded-full p-2 transition-colors gap-5 items-center hover:bg-hover",
                { "font-bold": isActive }
              )}
            >
              <Icon name={isActive ? m.active : m.name.toLowerCase()} />
              <div className="text-xl pr-4 pb-2">{m.name}</div>
            </div>
          )}
        </NavLink>
      ))}
      <button className="inline-flex rounded-full p-2 transition-colors gap-5 items-center hover:bg-hover">
        <Icon name="more" /> <span className="text-2xl pb-2 pr-4">More</span>
      </button>
    </nav>
  );
}

export default Menu;
