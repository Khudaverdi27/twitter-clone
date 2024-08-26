import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "../common/Icon";
import { NavLink } from "react-router-dom";

const poppoverMenu = [
  { name: "Lists", slug: "/lists", icon: "lists" },
  { name: "Premium", slug: "/premium", icon: "logo" },
  { name: "Bookmarks", slug: "/bookmarks", icon: "bookmarks" },
  { name: "Monetization", slug: "/monetization", icon: "monetization" },
  { name: "Verified Orgs", slug: "/verified-orgs-signup", icon: "orgs" },
  { name: "Ads", slug: "/ads", icon: "ads" },
  { name: "Create your Space", slug: "/space", icon: "space" },
  { name: "Settings and privacy", slug: "/settings-privacy", icon: "settings" },
];

function More() {
  return (
    <Popover className=" outline-none">
      <PopoverButton className="inline-flex focus:outline-none rounded-full p-2 transition-colors gap-5 items-center hover:bg-hover">
        <Icon name="more" /> <span className="text-2xl pb-2 pr-4">More</span>
      </PopoverButton>

      <PopoverPanel
        anchor="top"
        className="flex min-h-[85vh] absolute !left-10  !top-0 flex-col bg-black w-[318px] rounded-xl  shadow-md  shadow-gray-700  gap-2"
      >
        {poppoverMenu.map((m) => (
          <NavLink key={m.name} to={m.slug} className="block">
            <div
              className={
                "flex relative  p-3 transition-colors gap-5 items-center hover:bg-hover"
              }
            >
              <Icon name={m.icon} />
              <div className="text-xl pr-4 pb-1 font-bold">{m.name}</div>
            </div>
          </NavLink>
        ))}
      </PopoverPanel>
    </Popover>
  );
}

export default More;
