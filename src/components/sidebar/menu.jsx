import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";
import classNames from "classnames";
import More from "./More";
import Post from "./Post";
import store from "../../store";

const stateUsername = store.getState().auth.currentAccount.username;

const menus = [
  { name: "Home", active: "homeActive", slug: "/" },
  { name: "Explore", active: "exploreActive", slug: "/explore" },
  {
    name: "Notifications",
    active: "notifyActive",
    slug: "/notifications",
    count: 1,
  },
  { name: "Grok", active: "grokActive", slug: "/grok" },
  { name: "Messages", active: "messagesActive", slug: "/messages" },
  {
    name: "Profile",
    active: "profileActive",
    slug: `username/${stateUsername}`,
  },
];

function Menu() {
  return (
    <nav className="mt-0.5  mb-1">
      {menus.map((m) => (
        <NavLink key={m.name} to={m.slug} className="block">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex relative rounded-full p-2 transition-colors gap-5 items-center hover:bg-hover",
                { "font-bold": isActive }
              )}
            >
              <Icon name={isActive ? m.active : m.name.toLowerCase()} />
              <div className="text-xl pr-4 pb-2">{m.name}</div>
              {m.count && (
                <span className="absolute top-2 left-5 size-4 flex items-center justify-center  bg-blue-400 rounded-full text-xs">
                  {m.count}
                </span>
              )}
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <Post />
    </nav>
  );
}

export default Menu;
