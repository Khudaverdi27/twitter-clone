import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAccount } from "../../store/hooks/reduxhook";
import { NavLink } from "react-router-dom";

function Profile() {
  const account = useAccount();

  return (
    <Popover className="relative pb-4 outline-none ">
      <PopoverButton
        className={
          "flex items-center justify-around w-full focus:outline-none hover:bg-hover py-2 rounded-full"
        }
      >
        <div className="flex items-center ">
          <figure className="size-10">
            <img
              className="rounded-full size-full"
              src={account?.avatar}
              alt=""
            />
          </figure>
          <div className="pl-4 text-left">
            <div className="font-bold">{account.name}</div>
            <div className=" text-[#575b5f]">@{account.username}</div>
          </div>
        </div>
        <span className="font-bold">...</span>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex min-h-[20vh] flex-col bg-black w-[308px] rounded-xl  shadow-md  shadow-gray-700  gap-2 justify-center items-start  "
      >
        <button className="hover:bg-hover w-full text-left pl-4 py-2 font-bold">
          Add an exsisting account
        </button>
        <button className="hover:bg-hover w-full text-left pl-4 py-2 font-bold">
          Log out {`@${account.username}`}
        </button>
      </PopoverPanel>
    </Popover>
  );
}

export default Profile;
